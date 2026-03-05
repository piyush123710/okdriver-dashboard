const express = require("express");
const router = express.Router();
const controller = require("../controllers/eventController");

router.post("/event", controller.addEvent);
router.get("/events", controller.getEvents);

module.exports = router;

