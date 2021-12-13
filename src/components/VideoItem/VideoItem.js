import "./VideoItem.scss";

// Receiving props from VideoNav for indivdual videos
const VideoItem = (props) => {
  return (
    <article className="video-item">
      <div className="video-item__thumb-container">
        <img
          className="video-item__thumb"
          src={props.image}
          alt={props.title}
        />
      </div>
      <div className="video-item__container">
        <p className="video-item__title">{props.title}</p>
        <p className="video-item__channel">{props.channel}</p>
      </div>
    </article>
  );
};

export default VideoItem;
