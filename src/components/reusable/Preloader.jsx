import React, { useState, useEffect } from "react";

import PacmanLoader from "react-spinners/PacmanLoader";

import "./Preloader.scss";

const Preloader = (props) => {
  const [size, setSize] = useState(40);

  /* Checking the viewport size and setting the size of the preloader. */
  useEffect(() => {
    if (window.matchMedia("(max-width:800px)").matches) {
      console.log("a viewport tem pelo menos 800 pixels de largura");
      setSize(30);
    }
  }, []);

  return props.trigger ? (
    <div className="preloader-container">
      <div className="preloader">
        <PacmanLoader
          className="preloader"
          color={"#3493be"}
          loading={true}
          size={size}
        />
      </div>
    </div>
  ) : (
    ""
  );
};

export default Preloader;
