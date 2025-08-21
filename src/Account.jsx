import React from "react";
import "./account.css";
import { FaCamera } from "react-icons/fa";
import image from './assets/image.png'

function Account() {
  return (
    <div className="settings-container">
      <h2>Account Settings</h2>

      <div className="profile-card">
        <div className="profile-pic-wrapper">
          <img
            src={image}
            alt="profile"
            className="profile-pic"
          />
          <div className="camera-icon">
            <FaCamera size={14} color="#fff" />
          </div>
        </div>

        <div className="profile-info">
          <h3>Marry Doe</h3>
          <p className="email">marry@gmail.Com</p>
        </div>
      </div>

      <p className="description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat,
        Sed Diam
      </p>

      <hr />
    </div>
  );
}

export default Account;
