import React, { useState, useEffect } from "react";
import { getAllCars } from "../api-adapter";

const Admin = (props) => {
  const [sellersCars, setSellersCars] = useState([]);
  const user = props.user;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCars();

      const filterData = data.filter((element) => {
        return element.seller === user.id;
      });

      setSellersCars(filterData);
    };
    fetchData();
  }, []);

  return (
    <div id="adminAddCar">
      <h1>Cars for Sale:</h1>
      {sellersCars.map((car) => {
        return (
          <div>
            <div>
              {car.make} {car.model} {car.year} {car.price}
            </div>
            <button>Edit Car</button> <button>Remove Car</button>
          </div>
        );
      })}
    </div>
  );
};

export default Admin;
