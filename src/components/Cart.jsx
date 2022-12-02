import React, { useEffect, useState } from "react";
import { addCarToCart, checkOut, getCartByUser } from "../api-adapter";
import { Cart_SingleCar, GuestCartItem } from "./";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {
  const [activeCartCars, setActiveCartCars] = useState([]);
  const [currentId, setCurrentId] = useState();
  const isLoggedIn = props.isLoggedIn;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCartByUser();
      const activeCart = data[0].cars;
      const id = data[0].id;
      setCurrentId(id);
      setActiveCartCars(activeCart);

      
    };
    fetchData();
  }, [isLoggedIn, addCarToCart]);

  let total = 0;


  async function finishedSale() {
    await checkOut(currentId);
    navigate("/myaccount");
  }
  return (
    <div id="cart">
      {localStorage.getItem("token") ? (
        <div>
          <h1>Your Cart:</h1>
          {activeCartCars
            ? activeCartCars.map((item) => {
                return <Cart_SingleCar key={item.id} item={item} />;
              })
            : null}
          <h3>
            Total Price:{" "}
            {/* {activeCartCars.map((item) => {
              total += item.price;
            })}
            ${parseInt(total, 10)} */}
          </h3>
          <button onClick={finishedSale}>Check Out</button>
        </div>
      ) : (
        <div>
          <h1>Your Cart:</h1>
          {JSON.parse(localStorage.getItem("cart")).map((item)=>{
            return <GuestCartItem item={item}/>
          })}
            <h3>Please login or register to checkout! <br/>You're cart will be saved!</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
