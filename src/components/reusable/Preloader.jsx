import React from "react";
import "./Preloader.scss";

const Preloader = (props) => {
  return props.trigger ? (
    <div id="preloader">
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
      <div className="item"></div>
    </div>
  ) : (
    ""
  );
};

export default Preloader;
