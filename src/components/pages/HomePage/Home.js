import React, { Component } from "react";
import axios from "axios";
import "./HomePage.scss";
import Header from "../../Header/Header";
import VideoNav from "../../VideoNav/VideoNav";
import VideoDetails from "../../VideoDetails/VideoDetails";
import VideoPlayer from "../../VideoPlayer/VideoPlayer";

const API_URL = "https://project-2-api.herokuapp.com/videos";
const API_KEY = "af575ba7-79ad-496f-811f-613d4432aeef";

class Home extends Component {
  state = {
    videosList: [],
    selectedVideo: null,
  };

  fetchMovieDetails = (videoId) => {
    // https://api.themoviedb.org/3/movie/587807?api_key=c394ed7dc4106041334dd7041556d8f5
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

    // https://api.themoviedb.org/3/movie/popular?api_key=c394ed7dc4106041334dd7041556d8f5
    axios
      .get(`${API_URL}/?api_key=${API_KEY}`)
      .then((response) => {
        this.setState({
          videosList: response.data,
        });

        return response.data[0].id;
      })
      .then((firstVideoId) => {
        const videoToLoadId =
          selectedVideoId !== undefined ? selectedVideoId : firstVideoId;

        this.fetchMovieDetails(videoToLoadId);
      });
  }

  componentDidUpdate(prevProps) {
    const newVideoId = this.props.match.params.videoId;

    if (prevProps.match.params.videoId !== newVideoId) {
      const videoToLoadId =
        newVideoId !== undefined ? newVideoId : this.state.videosList[0].id;

      this.fetchMovieDetails(videoToLoadId);
    }
  }

  render() {
    // const nextVideos = this.state.videosList.filter(
    //   (video) => video.id !== this.state.selectedVideo.id
    // );

    return (
      <div className="brainflix">
        <Header />

        {/* <VideoPlayer selectedVideo={this.state.selectedVideo} /> */}

        <div className="brainflix__container-desktop">
          {this.state.selectedVideo ? (
            <VideoDetails selectedVideo={this.state.selectedVideo} />
          ) : (
            <p>Loading</p>
          )}
          <VideoNav videos={this.state.videosList} />
        </div>
      </div>
    );
  }
}

export default Home;
