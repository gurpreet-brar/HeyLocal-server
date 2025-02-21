import express from "express";
import {
  getEvents,
  getFeaturedEvents,
  postEvent,
  getEvent,
} from "../controlllers/events-controller.js";

const router = express.Router();

router.route("/").get(getEvents).post(postEvent);
router.route("/featured").get(getFeaturedEvents);
router.route("/:id").get(getEvent);

export default router;
