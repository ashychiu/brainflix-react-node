const express = require("express");
const cors = require("cors");
const videosRouter = require("./routes/videos");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || process.argv[2] || 8080;

//middleware for client to connect to API
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

//middleware for incoming request
app.use(express.json());

//for serving static files
app.use(express.static("public"));

//express router
app.use("/videos", videosRouter);

//server port
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
