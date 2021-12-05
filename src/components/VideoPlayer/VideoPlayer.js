import React from "react";

const VideoPlayer = (props) => {
  const { image } = props.selectedVideo;
  return (
    <>
      <video className="video-details__video" controls poster={image}>
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default VideoPlayer;
