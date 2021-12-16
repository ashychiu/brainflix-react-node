const express = require("express");
const videoRoutes = require("./routes/videos");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
