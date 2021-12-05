import CommentSection from "../CommentSection/CommentSection";
import formatDate from "../../utils/formatDate";
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
    <section className="video-details">
      <video className="video-details__video" poster={image}></video>
      {/* <img className="video-details__image" src={image} alt={title} /> */}
      <div className="video-details__container">
        <h2>{title}</h2>
        <h3>By {channel}</h3>
        {formatDate(timestamp)}
        <p>{likes}</p>
        <p>{views}</p>
        <p>{description}</p>
        <CommentSection comments={comments} />
      </div>
    </section>
  );
};

export default VideoDetails;
