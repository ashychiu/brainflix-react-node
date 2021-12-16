const express = require("express");
const cors = require("cors");
const videosRouter = require("./routes/videos");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());

app.use(express.static("public"));

// app.use("/videos", videosRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
