let io;

exports.initSocket = (server) => {
  const socketIO = require("socket.io");
  io = socketIO(server, {
    cors: {
      origin: "*"
    }
  });

  io.on("connection", (socket) => {
    console.log("Client connected");
  });
};

exports.getIO = () => {
  return io;
};

