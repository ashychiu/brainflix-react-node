import React from "react";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import InputField from "../InputField/InputField";
import TextArea from "../TextArea/TextArea";
import "./CommentForm.scss";

const API_URL = process.env.REACT_APP_API_URL;
const avatar = `${API_URL}/images/Mohan-muruge.jpg`;

// Input form in comment section of video details
const CommentForm = () => {
  return (
    <>
      <div className="comment-form__container">
        <div className="comment-form__avatar-container">
          <Avatar className="comment-form__avatar" src={avatar} />
        </div>
        <div className="comment-form__input-container">
          <div className="comment-form__input-container-tab-desk">
            {/* mobile version comment form is textarea */}
            <form className="comment-form">
              <label>JOIN THE CONVERSATION </label>
              <TextArea
                className="comment-form__input-mobile"
                type="textbox"
                rows="5"
                name="comment"
                placeholder="Add a new comment"
              />

              {/* tablet/desktop comment form is text-input */}
              <InputField
                className="comment-form__input"
                type="text"
                placeholder="Add a new comment"
              />
            </form>
          </div>
          <Button id="submitButton" placeholder="COMMENT" />
        </div>
      </div>
      <hr />
    </>
  );
};

export default CommentForm;
