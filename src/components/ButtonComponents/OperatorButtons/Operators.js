import React, { useState, useEffect } from "react";
import { operators } from "../../../data.js";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

const Operators = props => {
  // STEP 2 - add the imported data to state

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(operators);
  }, []);

  return (
    <div>
      {Object.keys(data).map((char, i) => (
        //const char = data[key];
        <OperatorButton
          key={i}
          char={data[char].char}
          value={data[char].value}
          handleOperator={props.handleOperator}
        />
      ))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
export default Operators;
