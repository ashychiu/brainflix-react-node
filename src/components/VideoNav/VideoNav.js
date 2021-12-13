import VideoItem from "../VideoItem/VideoItem";
import { NavLink } from "react-router-dom";
import "./VideoNav.scss";

const VideoNav = (props) => {
  return (
    <section className="video-nav__list">
      <h2 className="video-nav__heading">NEXT VIDEOS</h2>
      {props.videos.map((video) => {
        return (
          <NavLink
            to={`/videos/${video.id}`}
            className="video-nav__link"
            key={video.id}
          >
            <VideoItem
              id={video.id}
              title={video.title}
              channel={video.channel}
              image={video.image}
            />
          </NavLink>
        );
      })}
    </section>
  );
};

export default VideoNav;
