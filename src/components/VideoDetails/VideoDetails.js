import CommentSection from "../CommentSection/CommentSection";
import formatDate from "../../utils/formatDate";
import "./VideoDetails.scss";
import likeIcon from "../../assets/icons/likes.svg";
import viewIcon from "../../assets/icons/views.svg";

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
        <hr className="video-details__divider-mobile" />
        <h3>By {channel}</h3>
        {formatDate(timestamp)}
        <p className="video-details__likes-num">
          <img className="video-details__like-icon" src={likeIcon} />
          {likes}
        </p>
        <p className="video-details__views-num">
          <img className="video-details__view-icon" src={viewIcon} />
          {views}
        </p>
        <hr />
        <p>{description}</p>
        <CommentSection comments={comments} />
      </div>
    </section>
  );
};

export default VideoDetails;
