import React from "react";
import "./VideoPlayer.scss";

const API_URL = process.env.REACT_APP_API_URL;
const defaultImage = `${API_URL}/images/Upload-video-preview.jpg`;

// Video Player: receiving props from HomePage for selectedVideo to display
const VideoPlayer = (props) => {
  const { image, video, id } = props.selectedVideo;
  const videoImage = image ? image : defaultImage;
  const API_KEY = "af575ba7-79ad-496f-811f-613d4432aeef";

  return (
    <>
      <video
        key={id}
        className="video-details__player"
        controls
        poster={videoImage}
      >
        <source src={`${video}?api_key=${API_KEY}`} />
      </video>
    </>
  );
};

export default VideoPlayer;
