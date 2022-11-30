import React, {useEffect, useState} from "react";
import { getCartByUser } from "../api-adapter";
import {Cart_SingleCar} from "./"

const Cart = () => {
  const [usersCart, setUsersCart] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      const data = await getCartByUser()
      setUsersCart(data)
    }
    fetchData()
  }, [])

  console.log(usersCart)

  return (
    <div id="cart">
        {usersCart[0].cars.map((item)=>{
        return <Cart_SingleCar key = {item.id} item={item}/>
      })}
  </div>
  );
};

export default Cart;