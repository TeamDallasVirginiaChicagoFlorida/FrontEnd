import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getSingleCar } from "../api-adapter";

const SingleCarDetails = (props) => {
  const {id} = useParams();
  const [singleCar, setSingleCar] = useState([])
  useEffect(()=>{
    const fetchData = async()=>{
      const data = await getSingleCar(id)
      setSingleCar(data)
    }
    fetchData()
  },[])
  const navigate = useNavigate();
  // const [carDetails, setCarDetails] = useState({
  //       type: '',
  //       make: '',
  //       model: '',
  //       year: '',
  //       color: '',
  //       price: '',
  //       transmission_type: '',
  //       mileage: '',
  //       interior_color: '',
  //       doors: '',
  //       seats: '',
  //       mpg: '',
  //       inventory: '',
  //       photo_url: '',
  //       drive_type: '',
  //       new_used: '',
  // })
  // useEffect(()=>{
  //   car?
  //   setCarDetails(
  //     {        
  //     type: car.type,
  //     make: car.make,
  //     model: car.model,
  //     year: car.year,
  //     color: car.color,
  //     price: car.price,
  //     transmission_type: car.transmission_type,
  //     mileage: car.mileage,
  //     interior_color: car.interior_color,
  //     doors: car.doors,
  //     seats: car.seats,
  //     mpg: car.mpg,
  //     inventory: car.inventory,
  //     photo_url: car.photo_url,
  //     drive_type: car.drive_type,
  //     new_used: car.new_used,}
  //   ): null
  // }, [car])
  return (
    <div id="singleCarDetails">
  {singleCar ? (<>
    <div className="box">
     <h3 className="carTitle">{singleCar.make} {singleCar.model} {singleCar.year}  </h3>
     <img src = {singleCar.photo_url} />
     <div className="boxDetails">
      <div className="carInfo">
     <div>{singleCar.type} </div>
     <div>Color: {singleCar.color} </div>
     <div> $ {singleCar.price} </div>
     <div>Transmission: {singleCar.transmission_type} </div>
     <div>Mileage: {singleCar.mileage} </div>
     <div>Interior Color: {singleCar.interior_color} </div>
     <div>Doors: {singleCar.doors} </div>
     <div>Seats: {singleCar.seats} </div>
     <div>MPG: {singleCar.mpg} </div>
     <div>Drive Type: {singleCar.drive_type} </div>
     <div>Condition: {singleCar.new_used} </div></div></div>
    </div>
    <Link to={`/`}><button cla> Go Back to All Cars</button></Link>
    </>
    ):(
      <div> loading the cars... </div>
      )}
  </div>

    
  
  );
};

export default SingleCarDetails;