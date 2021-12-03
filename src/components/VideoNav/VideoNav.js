import VideoItem from "../VideoItem/VideoItem";
import "./VideoNav.scss";

const VideoNav = (props) => {
  return (
    <section className="nextvideo__list">
      <h2 className="nextvideo__section-title">NEXT VIDEOS</h2>
      {props.videos.map((video) => {
        return (
          <VideoItem
            key={video.id}
            id={video.id}
            title={video.title}
            channel={video.channel}
            image={video.image}
            onVideoSelect={props.onVideoSelect}
          />
        );
      })}
    </section>
  );
};

export default VideoNav;

// class VideoNav extends Component {
//   state = {
//     videos: videosList,
//   };

//   render() {
//     console.log(this.state.videos);
//     return (
//       <div>
//         <VideoItem videos={this.state.videos} />
//       </div>
//     );
//   }
// }

// export default VideoNav;
