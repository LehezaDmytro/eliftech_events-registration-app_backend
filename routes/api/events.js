import express from "express";
const router = express.Router();

import eventsControllers from "../../controllers/events.js";

router.get("/", eventsControllers.getAllEvents);

export default router;
