import express from "express";
import {
  getEvents,
  getFeaturedEvents,
  postEvent,
} from "../controlllers/events-controller.js";

const router = express.Router();

router.route("/").get(getEvents).post(postEvent);
router.route("/featured").get(getFeaturedEvents);

export default router;
