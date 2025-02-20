import knexinit from "knex";
import configuration from "../knexfile.js";

const knex = knexinit(configuration);

async function getEvents(_req, res) {
  try {
    const data = await knex("events").join(
      "event_images",
      "events.id",
      "event_images.event_id"
    );
    if (data.length === 0) {
      return res.status(404).json({ message: `No events found` });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: `Error fetching events data: ${error}` });
  }
}

async function getFeaturedEvents(_req, res) {
  try {
    const data = await knex("events")
      .join("event_images", "events.id", "event_images.event_id")
      .where({ "events.featured": true });
    if (data.length === 0) {
      return res.status(404).json({ message: `No featured events found` });
    }
    res.status(200).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error fetching featured events data: ${error}` });
  }
}

async function postEvent(req, res) {
  try {
    const {
      title,
      description,
      category,
      location,
      date,
      time,
      duration,
      total_spots,
      chat_link,
    } = req.body;
    if (
      !title ||
      !description ||
      !category ||
      !location ||
      !date ||
      !time ||
      !duration ||
      !total_spots ||
      !chat_link
    ) {
      res.status(400).json({ message: "All fields are required" });
    }
    const event_id = await knex("events").insert({
      title,
      description,
      category,
      location,
      date,
      time,
      duration,
      total_spots,
      chat_link,
    });
    const event = await knex("events")
      .where({ "events.id": event_id[0] })
      .first();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: `Error adding event: ${error}` });
  }
}

export { getEvents, getFeaturedEvents, postEvent };
