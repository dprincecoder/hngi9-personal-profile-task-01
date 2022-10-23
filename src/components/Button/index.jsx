import React from "react";
import './btn.css'
const index = ({ children, link, ...otherProps }) => {
  return (
    <a href={link} target="_blank" className="btn" {...otherProps}>
      {children}
    </a>
  );
};

export default index;
