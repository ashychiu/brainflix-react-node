import React from "react";
import "./VideoPlayer.scss";

const VideoPlayer = (props) => {
  const { image } = props.selectedVideo;
  return (
    <>
      <video className="video-details__player" controls poster={image}></video>
    </>
  );
};

export default VideoPlayer;
