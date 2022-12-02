import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addCarToCart, getCartByUser } from "../api-adapter";

const SingleCar = (props) => {
  const [car, setCar] = useState(props.car);
  const isLoggedIn = props.isLoggedIn;
  const currentId = props.currentId
  


  async function addCar() {
    if(isLoggedIn){
    const response = await addCarToCart(car.id, currentId);
    !response.error && setCar(false)}
    else{
        if(localStorage.getItem("cart")){
          const holdThisCart = JSON.parse(localStorage.getItem("cart"))
          if(!holdThisCart.includes(car.id)){
            holdThisCart.push(car.id)
            localStorage.setItem("cart", JSON.stringify(holdThisCart))
          }
        }else{
          localStorage.setItem("cart", JSON.stringify([car.id]))
        }
      }
    }
  

  return (
    <div id="singleCar">
      {car ?  <><h2>
        {car.make} {car.year} {car.model}
      </h2>
      <img src={car.photo_url} />
      <h3>${car.price}</h3>
      <Link to={`/carDetails/${car.id}`}>
        <button> See More Details</button>
      </Link>
      <button onClick={addCar}>Add To Cart</button></>:null}
     
    </div>
  );
};



export default SingleCar;
