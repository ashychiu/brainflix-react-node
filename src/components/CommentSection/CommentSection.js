import CommentItem from "../CommentItem/CommentItem";
import Button from "../Button/Button";
import "./CommentSection.scss";
import { v4 as uid } from "uuid";

const CommentSection = (props) => {
  return (
    <>
      <h3>Join the conversation</h3>

      <section className="comment-section">
        {props.comments.length} comments
        <Button />
        {props.comments.map((comment, uid) => {
          return (
            <CommentItem
              key={uid}
              name={comment.name}
              timestamp={comment.timestamp}
              comment={comment.comment}
            />
          );
        })}
      </section>
    </>
  );
};
export default CommentSection;
