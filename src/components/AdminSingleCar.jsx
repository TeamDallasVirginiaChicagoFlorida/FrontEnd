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
      <div>
        {car.make} {car.model} {car.year} ${car.price}
      </div>
      <button onClick={openEditCarMenu}>Edit Car</button>{" "}
      <button>Remove Car</button>
    </div>
  );
};

export default AdminSingleCar;
