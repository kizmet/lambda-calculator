import React from "react";

const NumberButton = props => {
  return (
    <button 
    id={`id-${props.number}`} 
    value={props.value}
    onClick={() => props.handleClick(props.value)}
    >
    {console.log(props)|| props.number}
      
    
    </button>
  );
};

export default NumberButton;