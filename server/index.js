const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(5000);
const io = socketio(expressServer);

io.on("connection", (socket) => {
  socket.on("messageFromClient", (message) => {
    console.log({ data: message.data });
    io.emit("messageFromServer", { data: message.data });
  });
});
