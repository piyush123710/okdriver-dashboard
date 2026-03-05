require("dotenv").config();

const express = require("express");
const cors = require("cors");
const http = require("http");

const eventRoutes = require("./routes/eventRoutes");
const { initSocket } = require("./websocket/socket");

require("./services/eventGenerator");

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL
}));

app.use(express.json());

app.use("/api", eventRoutes);

const server = http.createServer(app);

initSocket(server);

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});