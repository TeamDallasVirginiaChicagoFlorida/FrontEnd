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
 

  return (
    <div id="orderHistory">
      <h1>Order History:</h1>
      {pastOrders ? pastOrders.map((element)=>{
        return(
          <div key={element.id}>Order Number: {element.id} 
          {element.cars.map((car)=>{
            return(
              <div key={car.id}>{car.make} {car.model} {car.year} {car.price}</div>
            )
          })}</div>)
      }): null}

  </div>
  );
};

export default OrderHistory;