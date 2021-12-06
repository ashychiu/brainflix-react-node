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
