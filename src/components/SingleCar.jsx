import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addCarToCart, getCartByUser } from "../api-adapter";

const SingleCar = (props) => {
  const [car, setCar] = useState(props.car);
  const isLoggedIn = props.isLoggedIn;
  const currentId = props.currentId
  


  async function addCar() {
    if(localStorage.getItem("token")){
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
      {car ?  <>
        
      <h2>
        {car.make} {car.year} {car.model}
      </h2>
      <img src={car.photo_url} className="AllCarsPage" />
      <h3>${car.price}</h3>
      <Link to={`/carDetails/${car.id}`}>
        <button className="SeeMoreDetailsBtn"><span> See More Details</span></button>
      </Link>
      <span onClick={addCar} className="addToCartPlus"><span  className="material-symbols-outlined addToCart">
add_shopping_cart
</span> Add to Cart</span></>:<p>Loading...</p>}
     
    </div>
  );
};



export default SingleCar;
