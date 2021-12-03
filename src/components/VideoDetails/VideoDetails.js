// import CommentSection from "../CommentSection/CommentSection";
import "./VideoDetails.scss";

const VideoDetails = (props) => {
  const {
    channel,
    image,
    title,
    timestamp,
    description,
    likes,
    views,
    comments,
  } = props.selectedVideo;

  return (
    <div className="video-details">
      <h2>{title}</h2>
      <h3>By {channel}</h3>
      <img className="video-details__image" src={image} alt={title} />
      <p>{timestamp}</p>
      <p>{likes}</p>
      <p>{views}</p>
      <p>{description}</p>
      {/* <CommentSection comments={comments} /> */}
    </div>
  );
};

export default VideoDetails;
