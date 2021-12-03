import "./VideoItem.scss";

const VideoItem = (props) => {
  const handleVideoSelect = (e) => {
    e.preventDefault();
    props.onVideoSelect(props.id);
  };
  return (
    <article className="nextvideo__item" onClick={handleVideoSelect}>
      <img className="nextvideo__image" src={props.image} alt={props.title} />
      <div className="nextvideo__container">
        <p className="nextvideo__title">{props.title}</p>
        <p className="nextvideo__channel">{props.channel}</p>
      </div>
    </article>
  );
};

export default VideoItem;
