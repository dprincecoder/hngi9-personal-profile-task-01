import React from "react";
import './btn.css'
const index = ({ children, text, ...otherProps }) => {
  return (
    <button className="btn" {...otherProps}>
      {children}
    </button>
  );
};

export default index;
