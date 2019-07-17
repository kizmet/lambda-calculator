import React from "react";

const SpecialButton = props => {
  return (
    <button
    value={props.special}
    onClick={() => props.handleSpecial(props.special)}
    >
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.special}
    </button>
  );
};

export default SpecialButton;