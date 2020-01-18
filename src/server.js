const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const routes = require("./routes");

const { setUpWebSocket } = require("./websocket");

const app = express();
const server = http.Server(app);

setUpWebSocket(server);

mongoose.connect(
  "mongodb+srv://omnistack10:omnistack10@cluster0-81scl.mongodb.net/omnistack10",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

mongoose.connection.on("connected", () => {
  console.log("connected");
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
