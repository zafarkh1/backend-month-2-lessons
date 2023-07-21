import express from "express";
import { Server } from "socket.io";
import { join } from "path";

const app = express();

app.use(express.static(join(process.cwd(), "src", "public")));

const httpServer = app.listen(2024, console.log("listening ..."));

const io = new Server(httpServer);

io.on("connection", (socket) => {
  socket.on("user-joined", ({ username }) => {
    socket.broadcast.emit("new-user-joined", {
      username,
    });
  });

  socket.on("new-message", ({ from, message }) => {
    socket.broadcast.emit("new-user-message", {
      from,
      message,
    });
  });

  socket.on("user-typing", ({ username }) => {
    socket.broadcast.emit("new-user-typing", {
      username,
    });
  });
});
