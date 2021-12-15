import "./VideoItem.scss";

// Receiving props from VideoNav for indivdual videos
const VideoItem = (props) => {
  const { title, image, channel } = props;

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    // scroll to video player when an individual video is selected
    <article className="video-item" onClick={scrollToTop()}>
      <div className="video-item__thumb-container">
        <img className="video-item__thumb" src={image} alt={title} />
      </div>
      <div className="video-item__container">
        <p className="video-item__title">{title}</p>
        <p className="video-item__channel">{channel}</p>
      </div>
    </article>
  );
};

export default VideoItem;