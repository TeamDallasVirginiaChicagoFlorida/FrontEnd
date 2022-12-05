import React, { useState, useEffect } from "react";
import { getAllCars } from "../api-adapter";
import { AddAdminCar, EditAdminCar, AdminSingleCar } from "./"

const Admin = (props) => {
  const [sellersCars, setSellersCars] = useState([]);
  const user = props.user;
  const [sellingCar, setSellingCar] = useState(false)
  const [editCar, setEditCar] = useState(false)
  const [carBeingEdited, setCarBeingEdited] = useState({})

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

  return (
    <>
    <div id="adminAddCar">
      <h2>Manage Inventory:</h2>
      <button className="SeeMoreDetailsBtn" onClick={openAddCarMenu}><span>Sell a Car</span></button>
      {sellersCars.map((car) => {
        return (
            <AdminSingleCar key={car.id} setEditCar={setEditCar} user={user} car={car} editCar={editCar} setCarBeingEdited={setCarBeingEdited}/>
        );
      })}
    </div>
  {sellingCar ? <AddAdminCar setSellingCar={setSellingCar} user={user}/> : null}
  {editCar ? (
        <EditAdminCar setEditCar={setEditCar} user={user} carBeingEdited={carBeingEdited}  />
      ) : null}
    </>
  );
};

export default Admin;
