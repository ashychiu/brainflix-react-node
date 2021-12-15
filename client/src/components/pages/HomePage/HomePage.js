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
    videosList: [],
    selectedVideo: null,
  };

  fetchVideoDetails = (videoId) => {
    axios
      .get(`${API_URL}/${videoId}?api_key=${API_KEY}`)
      .then((videoDetails) => {
        this.setState({
          selectedVideo: videoDetails.data,
        });
      });
  };

  componentDidMount() {
    const selectedVideoId = this.props.match.params.videoId;
    axios
      .get(`${API_URL}/?api_key=${API_KEY}`)
      .then((response) => {
        const videosList = response.data;
        this.setState({
          videosList: videosList,
        });
        return videosList[0].id;
      })
      .then((defaultVideoId) => {
        const videoToLoadId =
          selectedVideoId !== undefined ? selectedVideoId : defaultVideoId;

        this.fetchVideoDetails(videoToLoadId);
      });
  }

  componentDidUpdate(prevProps) {
    const newVideoId = this.props.match.params.videoId;

    if (prevProps.match.params.videoId !== newVideoId) {
      const videoToLoadId =
        newVideoId !== undefined ? newVideoId : this.state.videosList[0].id;

      this.fetchVideoDetails(videoToLoadId);
    }
  }

  render() {
    const nextVideos = this.state.videosList.filter(
      (video) => video.id !== this.props.match.params.videoId
    );
    return (
      <div className="brainflix">
        <Header />
        {this.state.selectedVideo ? (
          <VideoPlayer selectedVideo={this.state.selectedVideo} />
        ) : (
          <p>Loading...</p>
        )}

        <div className="brainflix__container-desktop">
          {this.state.selectedVideo ? (
            <VideoDetails selectedVideo={this.state.selectedVideo} />
          ) : (
            <p>Loading...</p>
          )}
          <VideoNav videos={nextVideos} />
        </div>
      </div>
    );
  }
}

export default HomePage;