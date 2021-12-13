import CommentSection from "../CommentSection/CommentSection";
import formatDate from "../../utils/formatDate";
import "./VideoDetails.scss";

// Receiving props from HomePage for selectedVideo
const VideoDetails = (props) => {
  const { channel, title, timestamp, description, likes, views, comments } =
    props.selectedVideo;

  return (
    <section className="video-details">
      <div className="video-details__container">
        <h2 className="video-details__title">{title}</h2>
        <hr className="video-details__divider-mobile" />
        {/* different BEM block name for video info */}
        <div className="video-info__outter-container">
          <div className="video-info__left-container">
            <h3 className="video-info__channel">By {channel}</h3>
            <p className="video-info__date">{formatDate(timestamp)}</p>
          </div>
          <div className="video-info__right-container">
            <p className="video-info__views-num">{views}</p>{" "}
            <p className="video-info__likes-num">{likes}</p>
          </div>
        </div>
        <hr className="video-details__divider" />
        <p className="video-details__description">{description}</p>
        <CommentSection comments={comments} />
      </div>
    </section>
  );
};

export default VideoDetails;
