import React from "react";

const VideoPlayer = (props) => {
  const { image } = props.selectedVideo;
  return (
    <>
      <video className="video-details__video" controls poster={image}></video>
    </>
  );
};

export default VideoPlayer;
