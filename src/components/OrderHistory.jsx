import React, { useEffect, useState } from "react";
import { orderHistory } from "../api-adapter";

const OrderHistory = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const [pastOrders, setPastOrders] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await orderHistory();
      setPastOrders(data);
    };
    fetchData();
  }, []);

  return (
    <div id="orderHistory">
      <h2>Order History:</h2>
      {pastOrders
        ? pastOrders.map((element) => {
            return (
              <div key={element.id}>
                <ul><b>Order Number: {element.id}</b>
                {element.cars.map((car) => {
                  return (
                    <li key={car.id}>
                      {car.make} {car.model} {car.year} ${car.price}
                    </li>
                  );
                })}</ul>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default OrderHistory;
