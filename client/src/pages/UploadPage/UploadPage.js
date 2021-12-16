import React from "react";
import Header from "../../components/Header/Header";
import InputField from "../../components/InputField/InputField";
import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";
import videopreview from "../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";

// Receiving props from browser
const UploadPage = (props) => {
  const handleVideoUpload = () => {
    alert("Video uploaded sucessfully! \nClick OK to redirect to homepage.");
    window.location.href = "/"; // going to homepage since previous page maybe other videos
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
            onSubmit={() => {
              handleVideoUpload();
            }}
          />
          <Button
            id="cancelButton"
            placeholder="CANCEL"
            onSubmit={() => props.history.goBack()} // onClick going back to previous page
          />
        </div>
      </div>
    </>
  );
};

export default UploadPage;
