import React, { Fragment, useState } from "react";
import Numbers from "../ButtonComponents/NumberButtons/Numbers.js";
import Operators from "../ButtonComponents/OperatorButtons/Operators.js";
import Specials from "../ButtonComponents/SpecialButtons/Specials";
import * as math from "mathjs";

const Display = () => {
  const [input, setInput] = useState([]);
  const [display, setDisplay] = useState(0);

  const calculate = () => {
    let result = math.evaluate(input);
    result = String(result);
    setInput(result);
  };

  const handleClick = e => {
    setInput(input + e);
    setDisplay(e)
  };

  const handleSpecial = e => {
    e === "C"
      ? setInput(0)
      : e === "+/-"
      ? setInput(input * -1)
      : setInput(input / 100);
  };

  const handleOperator = e => {
    switch (e) {
      case "=":
        calculate();
        break;
      default:
        setInput(input + e);
    }
  };

  return (
    <Fragment>
      <div className="displayed">{input}</div>
      {/*<div className="displayed">{display}</div>*/}
      <div className="calculator">
        {/* Display any props data here */}
        <div className="leftSide">
          <Specials className="components" handleSpecial={handleSpecial} />
          <Numbers className="components" handleClick={handleClick} />
        </div>
        <div className="rightSide">
          <Operators className="components" handleOperator={handleOperator} />
        </div>
      </div>
    </Fragment>
  );
};

export default Display;
