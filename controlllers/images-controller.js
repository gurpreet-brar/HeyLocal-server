import knexinit from "knex";
import configuration from "../knexfile.js";

const knex = knexinit(configuration);

async function postImage(req, res) {
  try {
    const { event_id, image_url } = req.body;
    console.log(req.body);
    if (!event_id || !image_url) {
      res.status(400).json({ message: "All fields are required" });
    }
    const response = await knex("event_images").insert({ event_id, image_url });
    const data = await knex("event_images").where({ id: response[0] }).first();
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: `Error adding image : ${error}` });
  }
}

export { postImage };
