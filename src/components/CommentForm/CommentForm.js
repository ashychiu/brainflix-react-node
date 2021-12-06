import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import mohan from "../../assets/images/Mohan-muruge.jpg";
import InputField from "../InputField/InputField";
import "./CommentForm.scss";

import React from "react";

const CommentForm = () => {
  return (
    <>
      <div className="comment-form__container">
        <div className="comment-form__avatar-container">
          <Avatar className="comment-form__avatar" src={mohan} />
        </div>
        <div className="comment-form__input-container">
          <div className="comment-form__input-container-tab-desk">
            {/* mobile version comment form is textarea */}
            <form className="comment-form">
              <label>JOIN THE CONVERSATION </label>
              <textarea
                className="comment-form__input-mobile"
                type="textbox"
                id="comment-input"
                name="comment-input"
                rows="5"
                placeholder="Add a new comment"
              ></textarea>
            </form>
            {/* tablet/desktop comment form is text-input */}
            <InputField
              className="comment-form__input"
              type="text"
              placeholder="Add a new comment"
            />
          </div>
          <Button id="submitButton" placeholder="COMMENT" />
        </div>
      </div>
      <hr />
    </>
  );
};

export default CommentForm;
