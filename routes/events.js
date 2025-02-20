import express from "express";
import {
  getEvents,
  getFeaturedEvents,
  postEvent,
  getEvent,
} from "../controlllers/events-controller.js";

const router = express.Router();

router.route("/").get(getEvents).post(postEvent);
router.route("/:id").get(getEvent);
router.route("/featured").get(getFeaturedEvents);

export default router;
