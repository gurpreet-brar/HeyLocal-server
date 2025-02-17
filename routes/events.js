import express from "express";
import { getEvents } from "../controlllers/events-controller.js";

const router = express.Router();

router.route("/").get(getEvents);

export default router;
