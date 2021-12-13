import "./VideoItem.scss";

// Receiving props from VideoNav for indivdual videos
const VideoItem = (props) => {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    // scroll to video player when an individual video is selected
    <article className="video-item" onClick={scrollToTop()}>
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
