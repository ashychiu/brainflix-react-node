import formatDate from "../../utils/formatDate";
import Avatar from "../Avatar/Avatar";
import placeholder from "../../assets/images/placeholder.jpg";
import "./CommentItem.scss";

const CommentItem = (props) => {
  return (
    <>
      <article className="comment-item">
        <div className="comment-item__avatar-container">
          <Avatar className={"comment-item__avatar"} src={placeholder} />
        </div>
        <div className="comment-item__main-container">
          <div className="comment-item__top-container">
            <p className="comment-item__name">{props.name}</p>
            <p className="comment-item__date">{formatDate(props.timestamp)}</p>
          </div>
          <p className="comment-item__content">{props.comment}</p>
        </div>
      </article>
      <hr />
    </>
  );
};
export default CommentItem;
