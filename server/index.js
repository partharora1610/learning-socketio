const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(5000);
const io = socketio(expressServer);

io.on("connection", (socket) => {
  console.log("socket.io connected with the socket id: " + socket.id);

  socket.emit("messageFromServer", { data: "Welcome to the socketio server" });

  socket.on("messageFromClient", (dataFromClient) => {
    console.log(dataFromClient.data);
  });
});
