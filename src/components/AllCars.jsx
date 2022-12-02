import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    SingleCar
} from './';
import { getCartByUser } from "../api-adapter";

const AllCars = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const allCars = props.allCars;
  const [currentId, setCurrentId] = useState()
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCartByUser();
      console.log(data)
      const id = await data[0].id;
      setCurrentId(id);
    };
    fetchData();
  }, [isLoggedIn]);

  return (
    <div id="AllCars">
      {allCars.map((car)=>{
        return <SingleCar key = {car.id} car={car} isLoggedIn={isLoggedIn} currentId={currentId}/>
      })}
  </div>
  );
};


  


export default AllCars;