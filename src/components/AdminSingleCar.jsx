import React, {useState} from "react";
import { EditAdminCar } from "./"

const AdminSingleCar = (props) => {
    const setEditCar = props.setEditCar
    const user = props.user
    const car = props.car
    const editCar = props.editCar
    const setCarBeingEdited = props.setCarBeingEdited


    async function openEditCarMenu () {
        if (car.id){setCarBeingEdited(car)}
        
        setEditCar(true)
      }

  return (
    <div id="adminSingleCar">
      <div className="adminCarInfo">
        <img className="tinyimage" src={car.photo_url} /> {car.make} {car.model} {car.year} ${car.price} 
      
      <div className="adminButtons"><span className="addToCartPlus" onClick={openEditCarMenu}><span className="material-symbols-outlined">
edit
</span> Edit </span>{" "}
      <span className="addToCartPlus"><span className="material-symbols-outlined">
delete_forever
</span> Remove</span></div></div>
    </div>
  );
};

export default AdminSingleCar;
