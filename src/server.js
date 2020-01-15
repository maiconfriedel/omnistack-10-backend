const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

const app = express();

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

app.listen(3333);
