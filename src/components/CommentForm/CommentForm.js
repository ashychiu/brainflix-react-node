import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import InputForm from "../InputForm/InputForm";
import "./CommentForm.scss";

import React from "react";

const CommentForm = () => {
  return (
    <div className="comment-form__container">
      <Avatar className="comment-form__avatar" />
      <div className="comment-form__input-container">
        <div className="comment-form__input-container-tab-desk">
          <form className="comment-form">
            <label>JOIN THE CONVERSATION </label>
            <textarea
              className="comment-form__input-mobile"
              type="textbox"
              id="comment"
              name="comment"
              rows="5"
              placeholder="Add a new comment"
            ></textarea>
          </form>

          <InputForm
            className="comment-form__input"
            type="text"
            placeholder="Add a new comment"
          />
        </div>
        <Button id="submitButton" placeholder="COMMENT" />
      </div>
    </div>
  );
};

export default CommentForm;
