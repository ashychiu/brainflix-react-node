import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import InputField from "../../components/InputField/InputField";
import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";
import videopreview from "../../assets/images/Upload-video-preview.jpg";
import "./UploadPage.scss";
import axios from "axios";

// Receiving props from browser
const UploadPage = (props) => {
  const handleVideoUpload = (e) => {
    e.preventDefault();
    console.log(e.target.title.value);
    console.log(e.target.description.value);
    axios.post("http://localhost:8080/videos", {
      title: `${e.target.title.value}`,
      description: `${e.target.description.value}`,
    });
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
        {/* <div className="upload-page__form-container"> */}
        <form className="upload-form" onSubmit={handleVideoUpload}>
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
              name="title"
              type="text"
              placeholder="Add a title to your video"
            />
            <label>ADD A VIDEO DESCRIPTION</label>
            <TextArea
              className="upload-form__description"
              name="description"
              type="textbox"
              rows="4"
              placeholder="Add a description to your video"
            />
          </div>
          <div className="upload-page__bottom-container">
            <hr className="upload-page__divider-tab-desk" />
            <div className="upload-page__button-container">
              <Button id="publishButton" placeholder="PUBLISH" />
              {/* styling stored at button.scss */}
              <div id="cancelButton">
                <Link to="/" className="upload-page__cancel">
                  <p>CANCEL</p>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UploadPage;
