const CommentItem = (props) => {
  return (
    <article className="comment-item">
      <div className="comment-item__container">
        <p className="comment-item__name">{props.name}</p>
        <p className="comment-item__date">{props.timestamp}</p>
      </div>
      <p className="comment-item__content">{props.comment}</p>
    </article>
  );
};
export default CommentItem;
