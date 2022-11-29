import React, { useState } from "react";
import {
    SingleCar
} from './'

const AllCars = (props) => {
  const [query, setQuery] = useState('')

  const allCars = props.AllCars;

  
  return (
    <div id="allCars">
        <h2>This is the AllCars component, should be the parent component to single car</h2>
  </div>
  );
};


export default AllCars;