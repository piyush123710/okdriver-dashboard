const eventModel = require("../models/eventModel");

exports.addEvent = (req, res) => {
  const event = req.body;

  eventModel.insertEvent(event, (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Event stored", result });
  });
};

exports.getEvents = (req, res) => {
  eventModel.getEvents((err, data) => {
    if (err) return res.status(500).json(err);

    res.json(data);
  });
};

