import React from "react";
import "./header.css";

const index = () => {
  //get device width on desktop amd mobile
  const [width] = React.useState(window.innerWidth);
  const breakpoint = 768;

  return (
    <header className="header">
      <div className="share-icon-wrap">
        <img src="share-avater-icon.svg" alt="share icon" className="share-icon"/>
        <img src="dotted-hamburger.svg" alt="menu icon" className="menu-icon"/>
      </div>
      <div className="profile-img-circle">
        <img src="photo.jpg" alt="" id="profile__img" />
      </div>
      <div className="username-details">
        <h1 id="twitter">dprincecoder</h1>
        <h3 id="slack">dprincecoder</h3>
      </div>
    </header>
  );
};

export default index;
