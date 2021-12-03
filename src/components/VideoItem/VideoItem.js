import "./VideoItem.scss";

const VideoItem = (props) => {
  const handleVideoSelect = (e) => {
    e.preventDefault();
    props.onVideoSelect(props.id);
  };
  return (
    <section className="nextvideo__list">
      <h2 className="nextvideo__section-title">NEXT VIDEO</h2>
      {props.videos.map((video) => (
        <article className="nextvideo__item" onClick={handleVideoSelect}>
          <img className="nextvideo__image" src={video.image} />
          <div className="nextvideo__container">
            <p className="nextvideo__title">{video.title}</p>
            <p className="nextvideo__channel">{video.channel}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default VideoItem;
