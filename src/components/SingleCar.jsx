import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addCarToCart, getCartByUser } from "../api-adapter";

const SingleCar = (props) => {
  const [car, setCar] = useState(props.car);
  const isLoggedIn = props.isLoggedIn;
  const currentId = props.currentId


  async function addCar() {
    const response = await addCarToCart(car.id, currentId);

    !response.error && setCar(false)
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



// async function addCar() {
//   if (isLoggedIn) {
//     const response = await addCarToCart(car.id, currentId);

//     !response.error && setCar(false);
//   } else {
//     // 1. Check to see if there is a cart in Local Storage
//     // 2. If not, create a new cart in Local Storage
//     // 3. Once you have your cart array, you can push your new cart_item to the array
//     // example
//     const newItem = {make: car.make, model: car.model, price: car.price}
//     const currentCart = localStorage.getItem('cart')
//     currentCart.push(newItem)

// }

// return (
//   <div id="singleCar">
//     {car ? (
//       <>
//         <h2>
//           {car.make} {car.year} {car.model}
//         </h2>
//         <img src={car.photo_url} />
//         <h3>${car.price}</h3>
//         <Link to={`/carDetails/${car.id}`}>
//           <button> See More Details</button>
//         </Link>
//         <button onClick={addCar}>Add To Cart</button>
//       </>
//     ) : null}
//   </div>
// );
// };

export default SingleCar;
