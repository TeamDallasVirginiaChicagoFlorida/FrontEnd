import React, {useState} from "react";
import { EditAdminCar } from "./"
import { deleteCar } from "../api-adapter";

const AdminSingleCar = (props) => {
    const setEditCar = props.setEditCar
    const user = props.user
    const [car, setCar] = useState(props.car)
    const editCar = props.editCar
    const setCarBeingEdited = props.setCarBeingEdited


    async function openEditCarMenu () {
        if (car.id){setCarBeingEdited(car)}
        
        setEditCar(true)
      }

      async function deleteTheCar () {
        const response = await deleteCar(car.id)
        !response.error && setCar(false)
      }

  return (
    <div id="adminSingleCar">
      {car ?  <div className="adminCarInfo">
        <img className="tinyimage" src={car.photo_url} /> {car.make} {car.model} {car.year} ${car.price} 
      
      <div className="adminButtons"><span className="addToCartPlus" onClick={openEditCarMenu}><span className="material-symbols-outlined">
edit
</span> Edit </span>{" "}
      <span onClick={deleteTheCar} className="addToCartPlus"><span className="material-symbols-outlined">
delete_forever
</span> Remove</span></div></div>: null}
     
    </div>
  );
};

export default AdminSingleCar;
