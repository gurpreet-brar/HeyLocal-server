import knexinit from "knex";
import configuration from "../knexfile.js";

const knex = knexinit(configuration);

async function getEvents(req, res) {
  try {
    const data = await knex("events");
    res.status(200).json(data);
  } catch (error) {
    console.log("Error fetching events data", error);
  }
}

export { getEvents };
