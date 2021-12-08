import React from "react";
import Header from "../../Header/Header";
import InputField from "../../InputField/InputField";
import TextArea from "../../TextArea/TextArea";
import Button from "../../Button/Button";
import videopreview from "../../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";

const UploadPage = () => {
  return (
    <>
      <Header />
      <hr />

      <h2 className="upload-page__title">Upload Video</h2>
      <div className="upload-page__container">
        <form className="upload-form">
          <label>VIDEO THUMBNAIL</label>
          <img
            className="upload-form__thumb"
            src={videopreview}
            alt="Video Thumbnail"
          />
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
        </form>
        <Button id="publishButton" placeholder="PUBLISH" />
        <Button id="cancelButton" placeholder="CANCEL" />
      </div>
    </>
  );
};

export default UploadPage;
