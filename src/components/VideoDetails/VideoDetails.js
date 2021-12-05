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
      <video className="video-details__video" controls poster={image}></video>
      {/* <img className="video-details__image" src={image} alt={title} /> */}
      <div className="video-details__container">
        <h2 className="video-details__title">{title}</h2>
        <hr className="video-details__divider-mobile" />
        <div className="video-info__outter-container">
          <div className="video-info__container">
            <h3 className="video-info__channel">By {channel}</h3>
            <p className="video-info__date">{formatDate(timestamp)}</p>
          </div>
          <div className="video-info__container">
            <p className="video-info__likes-num">
              <img className="video-info__like-icon" src={likeIcon} />
              {likes}
            </p>
            <p className="video-info__views-num">
              <img className="video-info__view-icon" src={viewIcon} />
              {views}
            </p>
          </div>
        </div>
        <hr />
        <p className="video-details__description">{description}</p>
        <CommentSection comments={comments} />
      </div>
    </section>
  );
};

export default VideoDetails;
