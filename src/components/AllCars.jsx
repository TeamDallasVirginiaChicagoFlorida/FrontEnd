import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
    SingleCar
} from './';

const AllCars = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const allCars = props.allCars;
  return (
    <div id="AllCars">
      {allCars.map((car)=>{
        return <SingleCar key = {car.id} car={car} isLoggedIn={isLoggedIn}/>
      })}
  </div>
  );
};


  


export default AllCars;