import express from "express";
import { postImage } from "../controlllers/images-controller";

const router = express.Router();
router.route("/").post(postImage);
