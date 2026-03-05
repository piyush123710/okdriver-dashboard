const db = require("../config/db");

exports.insertEvent = (event, callback) => {
  const sql =
    "INSERT INTO driver_events (driver_id, event_type, speed) VALUES (?, ?, ?)";

  db.query(sql, [event.driver_id, event.event_type, event.speed], callback);
};

exports.getEvents = (callback) => {
  db.query("SELECT * FROM driver_events ORDER BY timestamp DESC LIMIT 20", callback);
};

