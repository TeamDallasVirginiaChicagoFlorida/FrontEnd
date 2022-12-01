import React, {useEffect, useState} from "react";
import { orderHistory } from "../api-adapter";


const OrderHistory = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const [pastOrders, setPastOrders] = useState([]);
  useEffect(()=>{
const fetchData = async()=>{
  const data = await orderHistory()
  setPastOrders(data)
}
fetchData();
  },[])
  console.log(pastOrders, "this is the past orders")

  return (
    <div id="orderHistory">
        <h2>This is the OrderHistory component</h2>
  </div>
  );
};

export default OrderHistory;