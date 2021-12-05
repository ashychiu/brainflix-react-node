import "./VideoItem.scss";

function scrollToTop() {
  window.scrollTo(0, 0);
}

const VideoItem = (props) => {
  const handleVideoSelect = (e) => {
    e.preventDefault();
    props.onVideoSelect(props.id);
    // scrollToTop(); //scroll up the selected video when onclick
  };

  return (
    <article className="video-item" onClick={handleVideoSelect}>
      <img className="video-item__thumb" src={props.image} alt={props.title} />
      <div className="video-item__container">
        <p className="video-item__title">{props.title}</p>
        <p className="video-item__channel">{props.channel}</p>
      </div>
    </article>
  );
};

export default VideoItem;
