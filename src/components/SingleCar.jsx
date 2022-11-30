import React from "react";
import { Link } from "react-router-dom"

const SingleCar = (props) => {
  const car = props.car;
  
  return (
    <div id="singleCar">
        <h2>{car.make} {car.year} {car.model}</h2>
        <img src = {car.photo_url}/>
        <h3>${car.price}</h3>
        <Link to={`/carDetails/${car.id}`}><button> See More Details</button></Link>
       

  </div>
  );
};

export default SingleCar;