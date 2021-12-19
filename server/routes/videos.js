const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");
const fs = require("fs");

const readFile = () => {
  const videoData = fs.readFileSync("./data/videos.json");
  return JSON.parse(videoData);
};

const writeFile = (videoData) => {
  fs.writeFileSync("./data/videos.json", JSON.stringify(videoData, null, 2));
};

router.get("/", (req, res) => {
  let videoData = readFile();
  return res.status(200).json(videoData);
});

router.get("/:videoId", (req, res) => {
  let videoData = readFile();
  const video = videoData.find((video) => video.id === req.params.videoId);
  console.log(req.params.videoId);

  if (!video) {
    return res.status(404).send("Video not found!");
  }

  return res.status(200).json(video);
});

router.post("/", (req, res) => {
  if (!req.body.title || !req.body.description) {
    return res
      .status(400)
      .send("Must include both title and description of the video");
  }
  const { title, description } = req.body;
  const newVideo = {
    title: title,
    description: description,
    channel: "BrainStation",
    image: "http://localhost:8080/images/default-video-poster.jpeg",
    views: Math.ceil(Math.random() * 100000).toLocaleString(),
    likes: Math.ceil(Math.random() * 100000).toLocaleString(),
    duration: Math.ceil(Math.random()) + ":" + Math.ceil(Math.random() * 100),
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: Date.now(),
    comments: [
      {
        name: "Karina Shantanu",
        comment:
          "I just wanna say thank you for your efforts in these videos. They help me so much while I'm studying. You're awesome and so are your vidoes!",
        likes: Math.ceil(Math.random() * 10),
        timestamp: Date.now(),
      },
      {
        name: "Prema Mared",
        comment:
          "Great information all around! I am sure everyone will learn something here. Stay safe out there, folks.",
        likes: Math.ceil(Math.random() * 10),
        timestamp: Date.now(),
      },
    ],
    id: uuid(),
  };

  return res.status(201).send(newVideo);
  const videoData = readFile();
  videoData.push(newVideo);
  writeFile(videoData);

  return res.status(201).json(newVideo);
});

module.exports = router;
