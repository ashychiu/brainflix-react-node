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

//Return only the needed keys for videosList
router.get("/", (req, res) => {
  let videoData = readFile();
  videosList = videoData.map((video) => ({
    id: video.id,
    title: video.title,
    channel: video.channel,
    image: video.image,
  }));
  return res.status(200).json(videosList);
});

//Match the params.videoId with the data using .find()
router.get("/:videoId", (req, res) => {
  let videoData = readFile();
  const video = videoData.find((video) => video.id === req.params.videoId);

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

  //destructure the reqest body
  const { title, description } = req.body;
  //if no uploaded image in the request, then use default value which is defined in client side
  const videoPreview = req.image ? req.image : null;

  const newVideo = {
    title: title,
    description: description,
    channel: "BrainStation",
    image: videoPreview,
    views: Math.ceil(Math.random() * 100000).toLocaleString(),
    likes: Math.ceil(Math.random() * 100000).toLocaleString(),
    duration: Math.ceil(Math.random()) + ":" + Math.ceil(Math.random() * 100),
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: Date.now(),
    //default mock comments
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

  const videoData = readFile();
  videoData.push(newVideo);
  writeFile(videoData);

  return res.status(201).json(newVideo);
});

module.exports = router;
