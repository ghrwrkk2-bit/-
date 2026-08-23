const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});


// رسالة دخول
io.on("connection", (socket) => {

  console.log("مستخدم دخل:", socket.id);


  // استقبال الرسائل
  socket.on("sendMessage", (data) => {

    io.emit("receiveMessage", data);

  });


  // خروج المستخدم
  socket.on("disconnect", () => {

    console.log("مستخدم خرج");

  });

});


// اختبار السيرفر
app.get("/", (req, res) => {

  res.send("Hassoni Chat Server يعمل بنجاح 🚀");

});


// تشغيل السيرفر
server.listen(3000, () => {

  console.log("Server running on port 3000");

});
