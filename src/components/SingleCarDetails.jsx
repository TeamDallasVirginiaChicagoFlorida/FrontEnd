import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getSingleCar, getCartByUser, addCarToCart } from "../api-adapter";

const SingleCarDetails = (props) => {
  const {id} = useParams();
  const [singleCar, setSingleCar] = useState([]);
  const [currentId, setCurrentId] = useState();
  
  useEffect(()=>{
    const fetchData = async()=>{
      const data = await getSingleCar(id)
      setSingleCar(data)
    }
    fetchData()
  },[])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCartByUser();
      const id = await data[0].id;
      setCurrentId(id);
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  async function addCar() {
    await addCarToCart(singleCar.id, currentId)
    navigate('/cart')
    console.log("you added a car, congrats!")
  }

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
    <button onClick={addCar}>Add To Cart</button>
    <Link to={`/`}><button className="goBackButton"> Go Back to All Cars</button></Link>
    </>
    ):(
      <div> loading the cars... </div>
      )}
  </div>

    
  
  );
};

export default SingleCarDetails;