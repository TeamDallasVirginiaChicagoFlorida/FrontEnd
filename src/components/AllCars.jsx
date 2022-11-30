import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
    SingleCar
} from './'

const AllCars = (props) => {
  const allCars = props.allCars;
  return (
    <div id="AllCars">
      {allCars.map((car)=>{
        return <SingleCar key = {car.id} car={car}/>
      })}
        <h2>This is the AllCars component, should be the parent component to single car</h2>
  </div>
  );
};


  


export default AllCars;