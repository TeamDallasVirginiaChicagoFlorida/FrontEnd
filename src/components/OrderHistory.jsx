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
      {pastOrders ? pastOrders.map((element)=>{
        return(
          <div key={element.id}>Order Number: {element.id} 
          {element.cars.map((car)=>{
            return(
              <div key={car.id}>{car.make} {car.model} {car.year} {car.price}</div>
            )
          })}</div>)
      }): null}

        <h2>This is the OrderHistory component</h2>
  </div>
  );
};

export default OrderHistory;