import React, { useState } from "react";

import "./ScrollTopButton.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

library.add(faAngleUp);

const ScrollTopButton = (props) => {
  const [display, setDisplay] = useState({ display: "none" });

  /* Listening for the scroll event and if the page is scrolled more than 200px it will set the display
to block. */
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
      setDisplay({ display: "block" });
    } else {
      setDisplay({ display: "none" });
    }
  });

  return (
    <div className="ScrollTopButton-container">
      <button onClick={props.ScrollTop} style={display}>
        <FontAwesomeIcon icon="fas fa-angle-up" />
      </button>
    </div>
  );
};

export default ScrollTopButton;
