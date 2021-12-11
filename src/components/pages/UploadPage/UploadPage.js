import React from "react";
import Header from "../../Header/Header";
import InputField from "../../InputField/InputField";
import TextArea from "../../TextArea/TextArea";
import Button from "../../Button/Button";
import videopreview from "../../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";

const UploadPage = (props) => {
  const handleVideoUpload = () => {
    alert("Video uploaded sucessfully");
    props.history.goBack();
  };
  return (
    <>
      <Header />
      <hr />
      <div className="upload-page__container">
        <h2 className="upload-page__title">Upload Video</h2>
        <hr className="upload-page__divider-tab-desk" />

        <form className="upload-form">
          <div className="upload-form__thumb-container">
            <label>VIDEO THUMBNAIL</label>
            <img
              className="upload-form__thumb"
              src={videopreview}
              alt="Video Thumbnail"
            />
          </div>
          <div className="upload-form__input-container">
            <label>TITLE YOUR VIDEO</label>
            <InputField
              className="upload-form__title"
              type="text"
              placeholder="Add a title to your video"
            />
            <label>ADD A VIDEO DESCRIPTION</label>
            <TextArea
              className="upload-form__description"
              type="textbox"
              rows="4"
              placeholder="Add a description to your video"
            />
          </div>
        </form>
        <hr className="upload-page__divider-tab-desk" />
        <div className="upload-page__button-container">
          <Button
            id="publishButton"
            placeholder="PUBLISH"
            onClick={() => {
              handleVideoUpload();
            }}
          />
          <Button id="cancelButton" placeholder="CANCEL" />
        </div>
      </div>
    </>
  );
};

export default UploadPage;
