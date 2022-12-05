import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getSingleCar, getCartByUser, addCarToCart } from "../api-adapter";

const SingleCarDetails = (props) => {
  const { id } = useParams();
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
    if(isLoggedIn){
    const response = await addCarToCart(singleCar.id, currentId);
    }
    else{
        if(localStorage.getItem("cart")){
          const holdThisCart = JSON.parse(localStorage.getItem("cart"))
          if(!holdThisCart.includes(singleCar.id)){
            holdThisCart.push(singleCar.id)
            localStorage.setItem("cart", JSON.stringify(holdThisCart))
          }
        }else{
          localStorage.setItem("cart", JSON.stringify([singleCar.id]))
        }
      }
      navigate("/cart");
    }

  return (
    <div id="singleCarDetails">
      {singleCar ? (
        <>
          <div className="box">
          <Link to={`/`}>
            <button className="SeeMoreDetailsBtn"><span>Go Back to All Cars</span></button>
          </Link>
            <h3 className="carTitle">
              {singleCar.make} {singleCar.model} {singleCar.year}{" "}
            </h3>
            <div className="carbox">
            <img src={singleCar.photo_url} id="singleCarPhoto" />
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
                <div>Condition: {singleCar.new_used} </div>
                <span onClick={addCar} className="addToCartPlus"><span  className="material-symbols-outlined addToCart">
add_shopping_cart
</span> Add to Cart</span></div>
              </div>
            </div>
          </div>
          
        </>
      ) : (
        <div> loading the cars... </div>
      )}
    </div>
  );
};

export default SingleCarDetails;
