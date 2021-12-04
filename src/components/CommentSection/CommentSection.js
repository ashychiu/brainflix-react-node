import CommentItem from "../CommentItem/CommentItem";
import Button from "../Button/Button";
import "./CommentSection.scss";

const CommentSection = (props) => {
  return (
    <>
      <h3>Join the conversation</h3>

      <section className="comment-section">
        {props.comments.length} comments
        <Button />
        {props.comments.map((comment) => {
          return (
            <CommentItem
              name={comment.name}
              timestamp={comment.timestamp}
              comment={comment.comment}
            />
          );
        })}
        >
      </section>
    </>
  );
};
export default CommentSection;
