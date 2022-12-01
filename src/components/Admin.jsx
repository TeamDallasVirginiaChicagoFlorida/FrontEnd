import React, {useState, useEffect} from "react";
import { getAllCars } from "../api-adapter";

const Admin = (props) => {
  const [sellersCars, setSellersCars]= useState([])
const user = props.user

  useEffect(()=>{
    const fetchData = async()=>{
      const data = await getAllCars()

      const filterData = data.filter((element)=>{
        element.seller === user.id
      })
      console.log(filterData,"this is the data")
    }
    fetchData()
  },[])

  return (
    <div id="adminAddCar">
        <h2>This is the AdminAddCar component, housing the form to add a car for sale, do we need a separate component for admin edit car and a component that shows all the cars the user has for sale?</h2>
  </div>
  );
};

export default Admin;