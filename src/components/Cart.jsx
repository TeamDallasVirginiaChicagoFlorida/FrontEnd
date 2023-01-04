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
          <div className="priceandcheckout"><h3>

            {/* {activeCartCars.map((item) => {
              total += item.price;
            })}
            ${parseInt(total, 10)} */}
          </h3>
          
          <button className="SeeMoreDetailsBtn Checkout" onClick={finishedSale}><span>Check Out</span></button></div>
        </div>
      ) : (
        <div>
          <h1>My Cart:</h1>
          {localStorage.getItem("cart")?  JSON.parse(localStorage.getItem("cart")).map((item)=>{
            return <GuestCartItem item={item}/>
          }): <p>You have no cars in your cart.</p>}
         
            <p id="cartMessage">Please login or register to checkout, your cart will be saved!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
