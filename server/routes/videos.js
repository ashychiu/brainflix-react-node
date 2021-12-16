const express = require("express");
const router = express.Router();
const axios = require("axios");
const { v4: uuid } = require("uuid");
const fs = require("fs");

const readFile = () => {
  const videoData = fs.readFileSync("./data/videos.json");
  return JSON.parse(videoData);
};

const writeFile = (videoData) => {
  fs.writeFileSync("/data/videos.json", JSON.stringify(videoData, null, 2));
};

router.get("/", (req, res) => {
  let videoData = readFile();
  return res.status(200).json(videoData);
});

module.exports = router;
