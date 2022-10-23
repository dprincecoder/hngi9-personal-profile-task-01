import React from "react";
import "./header.css";

const index = () => {
  return (
    <header className="header">
      <div className="share-icon">
        <img src="share-avater-icon.svg" alt="" />
      </div>
      <div className="profile-img-circle">
        <img src="photo.jpg" alt="" id="profile__img" />
      </div>
      <div className="username-details">
        <h1 id="twitter">@dprincecoder</h1>
        <h3 id="slack">@dprincecoder</h3>
      </div>
    </header>
  );
};

export default index;
