import React from "react";
import "./TextArea.scss";

// User input textarea, receiving props from UploadPage or CommentForm
const TextArea = (props) => {
  const { className, name, type, rows, placeholder } = props;
  return (
    <>
      <textarea
        className={className}
        name={name}
        type={type}
        rows={rows}
        placeholder={placeholder}
      ></textarea>
    </>
  );
};

export default TextArea;
