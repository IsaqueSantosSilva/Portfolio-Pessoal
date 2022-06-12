import React from "react";

const Button = (props) => {
  return (
    <button onClick={props.function} style={props.style}>
      {props.name} {props.icon}
    </button>
  );
};

export default Button;
