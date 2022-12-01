import React, { useEffect, useState } from "react";
import { getCartByUser } from "../api-adapter";
import { Cart_SingleCar } from "./";

const Cart = (props) => {
  const [activeCartCars, setActiveCartCars] = useState([])
  const isLoggedIn = props.isLoggedIn

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCartByUser();
        const activeCart = data[0].cars;
  setActiveCartCars(activeCart)
    };
    fetchData();
  }, [isLoggedIn]);

 let total = 0

  return (
    <div id="cart">
      <h1>Your Cart:</h1>
      {activeCartCars 
        ? activeCartCars.map((item) => {
            return <Cart_SingleCar key={item.id} item={item} />;
          })
        : null}
        <h3>Total Price: {
          activeCartCars.map((item)=>{
            total += item.price
          })}${parseInt(total, 10)}</h3>
    </div>
  );
};

export default Cart;
