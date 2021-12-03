import React, { Component } from "react";
import "./styles/partials/_globals.scss";
import videosList from "./data/videos.json";
import videoDetails from "./data/video-details.json";
import Header from "./components/Header/Header";
import VideoNav from "./components/VideoNav/VideoNav";

class App extends Component {
  state = {
    videos: videosList,
    selectedVideo: videoDetails[0],
  };

  handleVideoSelect = (id) => {
    this.setState({
      selectedVideo: videoDetails.find((video) => video.id === id),
    });
  };

  render() {
    const nextVideos = videosList.filter(
      (video) => video.id !== this.state.selectedVideo.id
    );

    return (
      <div className="Brainflix">
        <Header />
        <VideoNav videos={nextVideos} onVideoSelect={this.handleVideoSelect} />
      </div>
    );
  }
}

export default App;
