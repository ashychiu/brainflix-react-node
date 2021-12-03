import React, { Component } from "react";
import videosList from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";
import VideoItem from "../VideoItem/VideoItem";
import "./VideoNav.scss";

class VideoNav extends Component {
  state = {
    videos: videosList,
  };

  render() {
    console.log(this.state.videos);
    return (
      <div>
        <VideoItem videos={this.state.videos} />
      </div>
    );
  }
}

export default VideoNav;
