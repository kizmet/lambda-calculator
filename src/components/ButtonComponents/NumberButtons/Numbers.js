import React, { useState, useEffect } from "react";
import { numbers } from "../../../data.js";
import NumberButton from './NumberButton';
//import any components needed

//Import your array data to from the provided data file

const Numbers = props => {
  // STEP 2 - add the imported data to state
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(numbers);
  }, []);

  return (
    <div>
    
      {console.log(props) || data.map(data => 
        <NumberButton 
        key={data.toString()} 
        number={data}
        value={data}
        handleClick={props.handleClick}
        />
      )}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Numbers;
