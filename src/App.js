import React, { Component } from "react";
import "./App.scss";
import videosList from "./data/videos.json";
import videoData from "./data/video-details.json";
import Header from "./components/Header/Header";
import VideoNav from "./components/VideoNav/VideoNav";
import VideoDetails from "./components/VideoDetails/VideoDetails";

class App extends Component {
  state = {
    videos: videosList,
    selectedVideo: videoData[0],
  };

  handleVideoSelect = (id) => {
    this.setState({
      selectedVideo: videoData.find((video) => video.id === id),
    });
  };

  render() {
    const nextVideos = videosList.filter(
      (video) => video.id !== this.state.selectedVideo.id
    );

    return (
      <div className="Brainflix">
        <Header />
        <VideoDetails selectedVideo={this.state.selectedVideo} />
        <VideoNav videos={nextVideos} onVideoSelect={this.handleVideoSelect} />
      </div>
    );
  }
}

export default App;
