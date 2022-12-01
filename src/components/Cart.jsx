import React, { useEffect, useState } from "react";
import { checkOut, getCartByUser } from "../api-adapter";
import { Cart_SingleCar } from "./";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {
  const [activeCartCars, setActiveCartCars] = useState([])
  const [currentId, setCurrentId] = useState()
  const isLoggedIn = props.isLoggedIn

const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCartByUser();
        const activeCart = data[0].cars;
        const id= data[0].id
        setCurrentId(id)
  setActiveCartCars(activeCart)
    };
    fetchData();
  }, [isLoggedIn]);

 let total = 0

 async function finishedSale(){
  await checkOut(currentId)
  navigate("/myaccount")
 }
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
        <button onClick={finishedSale}>Check Out</button>  
    </div>
  );
};

export default Cart;
