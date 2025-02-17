import express from "express";
import "dotenv/config";
import cors from "cors";
import eventsRoute from "./routes/events.js";

const app = express();
const PORT = process.env.PORT || 5050;
app.use(express.json());
app.use(cors());

app.use("/events", eventsRoute);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
