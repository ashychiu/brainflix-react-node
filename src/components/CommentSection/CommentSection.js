import CommentItem from "../CommentItem/CommentItem";
import CommentForm from "../CommentForm/CommentForm";
import "./CommentSection.scss";
import { v4 as uid } from "uuid";

const CommentSection = (props) => {
  return (
    <>
      <section className="comment-section">
        <p className="comment-section__num-of">
          {props.comments.length} Comments
        </p>
        <CommentForm />
        <div className="comment-section__list">
          {props.comments.map((comment) => {
            return (
              <CommentItem
                key={uid()}
                name={comment.name}
                timestamp={comment.timestamp}
                comment={comment.comment}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
export default CommentSection;
