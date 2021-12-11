import React, { Component } from "react";
import axios from "axios";
import "./HomePage.scss";
import Header from "../../Header/Header";
import VideoNav from "../../VideoNav/VideoNav";
import VideoDetails from "../../VideoDetails/VideoDetails";
import VideoPlayer from "../../VideoPlayer/VideoPlayer";

const API_URL = "https://project-2-api.herokuapp.com/videos";
const API_KEY = "af575ba7-79ad-496f-811f-613d4432aeef";

class HomePage extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    const selectedVideo = this.props.match.params.videoId;

    axios.get(`${API_URL}?api_key=${API_KEY}`).then((response) => {
      const videoList = response.data;
      console.log(videoList);
      this.setState({
        videos: videoList,
      });
    });
  }

  fetchVideoDetails = (videoId) => {
    axios.get(`${API_URL}/${videoId}?api_key=${API_KEY}`).then((response) => {
      const videoData = response.data;
      console.log(videoData);
      this.setState({
        selectedVideo: videoData,
      });
    });
  };

  render() {
    // const nextVideos = videosList.filter(
    //   (video) => video.id !== this.state.selectedVideo.id
    // );

    return (
      <div className="brainflix">
        <Header />

        {/* <VideoPlayer selectedVideo={this.state.selectedVideo} /> */}

        <div className="brainflix__container-desktop">
          {/* <VideoDetails selectedVideo={this.state.selectedVideo} /> */}
          <VideoNav
            // videos={nextVideos}
            onVideoSelect={this.handleVideoSelect}
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
