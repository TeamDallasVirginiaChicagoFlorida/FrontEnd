import React, { useState, useEffect } from "react";
import { getAllCars } from "../api-adapter";
import { AddAdminCar, EditAdminCar } from "./"

const Admin = (props) => {
  const [sellersCars, setSellersCars] = useState([]);
  const user = props.user;
  const [sellingCar, setSellingCar] = useState(false)
  const [editCar, setEditCar] = useState(false)

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

  async function openAddCarMenu () {
    setSellingCar(true)
  }

  async function openEditCarMenu () {
    setEditCar(true)
  }
  return (
    <>
    <div id="adminAddCar">
      <h1>Cars for Sale:</h1>
      <button onClick={openAddCarMenu}>Sell a Car</button>
      {sellersCars.map((car) => {
        return (
          <div key={car.id}>
            <div>
              {car.make} {car.model} {car.year} {car.price}
            </div>
            <button onClick={openEditCarMenu}>Edit Car</button> <button>Remove Car</button>
          </div>
        );
      })}
    </div>
  {sellingCar ? <AddAdminCar setSellingCar={setSellingCar}/> : null}
  {editCar ? <EditAdminCar setEditCar={setEditCar}/> : null}
    </>
  );
};

export default Admin;
