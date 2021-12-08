import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";
import videosList from "./data/videos.json";
import videoData from "./data/video-details.json";
import Header from "./components/Header/Header";
import VideoNav from "./components/VideoNav/VideoNav";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import UploadPage from "./components/pages/UploadPage/UploadPage";

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
      <div className="brainflix">
        <BrowserRouter>
          <Switch>
            <Route path="/upload" component={UploadPage} />
          </Switch>
          <Header />
          <VideoPlayer selectedVideo={this.state.selectedVideo} />
          <div className="brainflix__container-desktop">
            <VideoDetails selectedVideo={this.state.selectedVideo} />
            <VideoNav
              videos={nextVideos}
              onVideoSelect={this.handleVideoSelect}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
