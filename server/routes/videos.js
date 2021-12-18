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

// {
//     "title": "Travel Health Useful Medical Information For",
//     "channel": "Glen Harper",
//     "image": "https://i.imgur.com/MMDMgD7.jpg",
//     "description": "Concerned about your health while travelling? You should know that international travellers should always be extra concerned about their health and safety. This video provides essential information on travel health risks and preventive measures to keep you and your loved ones safe during your travels.",
//     "views": "739,945",
//     "likes": "98,352",
//     "duration": "8:34",
//     "video": "https://project-2-api.herokuapp.com/stream",
//     "timestamp": 1620850202000,
//     "comments": [
//       {
//         "name": "Aurora Anita",
//         "comment": "This video is SO important for anybody wishing to travel overseas. We’ll be using these tips on our trips!",
//         "likes": 2,
//         "timestamp": 1620983771000
//       },
//       {
//         "name": "Joan Hidaka",
//         "comment": "Great information all around! I’m saving this video to watch again the next time I head out of the country. Stay safe out there, folks.",
//         "likes": 1,
//         "timestamp": 1620930181000
//       }
//     ],
//     "id": "b6f35f03-7936-409b-bd2a-446bcc5f30e7"
// }

router.post("/", (req, res) => {
  if (!req.body.title || !req.body.description) {
    return res
      .status(400)
      .send("Must include title and description of the video");
  }
  const { title, description } = req.body;
  const newVideo = {
    id: uuid(),
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
          "Everyone should watch this video. I enjoyed it so much and we’ll be using these tips!",
        likes: Math.ceil(Math.random() * 100),
        timestamp: Date.now(),
      },
      {
        name: "Prema Mared",
        comment:
          "Great information all around! I am sure everyone will learn something here. Stay safe out there, folks.",
        likes: Math.ceil(Math.random() * 100),
        timestamp: Date.now(),
      },
    ],
  };

  // return res.status(201).send(newVideo);
  const videoData = readFile();
  videoData.push(newVideo);
  writeFile(videoData);

  return res.status(201).json(newVideo);
});

module.exports = router;
