import React, { Component } from "react";
import axios from "axios";
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import VideoNav from "../../components/VideoNav/VideoNav";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const API_URL = process.env.REACT_APP_API_URL;

class HomePage extends Component {
  state = {
    videosList: [],
    selectedVideo: null,
  };

  fetchVideoDetails = (videoId) => {
    axios
      .get(`${API_URL}/videos/${videoId}`)
      .then((videoDetails) => {
        this.setState({
          selectedVideo: videoDetails.data,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    const selectedVideoId = this.props.match.params.videoId;
    axios
      .get(`${API_URL}/videos`)
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
      })
      .catch((err) => console.log(err));
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
    const videoNav = this.state.videosList.filter(
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
          <VideoNav videos={videoNav} />
        </div>
      </div>
    );
  }
}

export default HomePage;
