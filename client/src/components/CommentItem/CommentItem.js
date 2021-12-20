import formatDate from "../../utils/formatDate";
import Avatar from "../Avatar/Avatar";
import "./CommentItem.scss";

const API_URL = process.env.REACT_APP_API_URL;
const placeholder = `${API_URL}/images/placeholder.jpg`;

// Individual comments, receiving props from CommentSection
const CommentItem = (props) => {
  const { name, timestamp, comment } = props;
  return (
    <>
      <article className="comment-item">
        <div className="comment-item__avatar-container">
          <Avatar className={"comment-item__avatar"} src={placeholder} />
        </div>
        <div className="comment-item__main-container">
          <div className="comment-item__top-container">
            <p className="comment-item__name">{name}</p>
            <p className="comment-item__date">{formatDate(timestamp)}</p>
          </div>
          <p className="comment-item__content">{comment}</p>
        </div>
      </article>
      <hr />
    </>
  );
};
export default CommentItem;
