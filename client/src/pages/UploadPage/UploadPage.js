import React from "react";
import Header from "../../components/Header/Header";
import InputField from "../../components/InputField/InputField";
import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";
import "./UploadPage.scss";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const defaultImage = `${API_URL}/images/Upload-video-preview.jpg`;

// Receiving props from browser
const UploadPage = (props) => {
  const handleVideoUpload = (e) => {
    e.preventDefault();
    let title = e.target.title.value;
    let description = e.target.description.value;
    if (title && description) {
      axios.post(`${API_URL}/videos`, {
        title: `${title}`,
        description: `${description}`,
      });
      alert("Video uploaded sucessfully! \nClick OK to return to homepage.");
      window.location.href = "/"; // go back to homepage
    } else {
      alert("Please include both title & description"); // form validation
    }
  };
  return (
    <>
      <Header />
      <hr />
      <div className="upload-page__container">
        <h2 className="upload-page__title">Upload Video</h2>
        <hr className="upload-page__divider-tab-desk" />
        <form className="upload-form" onSubmit={handleVideoUpload}>
          <div className="upload-form__thumb-container">
            <label>VIDEO THUMBNAIL</label>
            <img
              className="upload-form__thumb"
              src={defaultImage}
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
          <div className="upload-form__bottom-container">
            <hr className="upload-form__divider-tab-desk" />
            <div className="upload-form__button-container">
              <Button id="publishButton" placeholder="PUBLISH" />
              {/* styling stored at button.scss */}
              <div id="cancelButton" onClick={() => props.history.goBack()}>
                <p>CANCEL</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UploadPage;
