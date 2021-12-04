import CommentSection from "../CommentSection/CommentSection";
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

  function formattedDate(timestamp) {
    console.log(timestamp);
    let date = new Date(timestamp);
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0");
    let yyyy = date.getFullYear();
    let newDate = mm + "/" + dd + "/" + yyyy;
    return newDate;
  }

  return (
    <section className="video-details">
      <img className="video-details__image" src={image} alt={title} />
      <div className="video-details__container">
        <h2>{title}</h2>
        <h3>By {channel}</h3>
        {formattedDate(timestamp)}
        {console.log(typeof timestamp)}
        <p>{likes}</p>
        <p>{views}</p>
        <p>{description}</p>
        <CommentSection comments={comments} />
      </div>
    </section>
  );
};

export default VideoDetails;
