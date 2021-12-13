import React from "react";
import "./TextArea.scss";

// Receiving props from UploadPage or CommentForm
const TextArea = (props) => {
  return (
    <>
      <textarea
        className={props.className}
        type={props.type}
        rows={props.rows}
        placeholder={props.placeholder}
      ></textarea>
    </>
  );
};

export default TextArea;
