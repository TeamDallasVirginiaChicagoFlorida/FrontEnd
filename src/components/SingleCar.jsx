import React from "react";
import { NavLink } from "react-router-dom"

const SingleCar = (props) => {
  const car = props.car;
  
  return (
    <div id="singleCar">
        <h2>This is the SingleCar component, used to render on the all cars page from the map, each single car should contain some sort of button or navlink to single car details</h2>
        <div>{car.make}</div>
        <div>{car.model}</div>
        <div>{car.year}</div>
        <div>{car.price}</div>
       

  </div>
  );
};

export default SingleCar;