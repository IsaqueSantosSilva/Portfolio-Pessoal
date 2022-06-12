import React from "react";
import "./Tooltip.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);

const Tooltip = (props) => {
  return (
    <div className="Tooltip" style={props.tooltip}>
      <p>{props.children}</p>
      <FontAwesomeIcon
        onClick={props.closeTooltip}
        className="icon"
        icon="fa-solid fa-times"
      />
    </div>
  );
};

export default Tooltip;
