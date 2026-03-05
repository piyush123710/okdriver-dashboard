const db = require("../config/db");
const { getIO } = require("../websocket/socket");

function generateEvent() {

  const events = ["speeding", "harsh_braking", "drowsy"];
  const eventType = events[Math.floor(Math.random() * events.length)];

  const speed = Math.floor(Math.random() * 120);

  const event = {
    driver_id: "DRIVER_" + Math.floor(Math.random() * 10),
    event_type: eventType,
    speed: speed
  };

  const sql =
    "INSERT INTO driver_events (driver_id, event_type, speed) VALUES (?, ?, ?)";

  db.query(sql, [event.driver_id, event.event_type, event.speed], (err) => {
    if (!err) {
      const io = getIO();
      io.emit("newEvent", event);
    }
  });
}

setInterval(generateEvent, 3000);

module.exports = generateEvent;

