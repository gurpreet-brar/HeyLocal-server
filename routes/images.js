import express from "express";
import { postImage } from "../controlllers/images-controller.js";

const router = express.Router();
router.route("/").post(postImage);

export default router;
