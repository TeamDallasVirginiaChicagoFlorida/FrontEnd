import React, {useState, useEffect} from "react";
import { getSingleCar } from "../api-adapter";

const GuestCartItem  = (props) => {
    const item = props.item;
    const [theCar, setTheCar] = useState({})

    console.log(item, typeof item)

    async function removeCar() {
      const localCart = JSON.parse(localStorage.getItem("cart"))
      const newCart = []
      for (let index = 0; index < localCart.length; index++) {
        if (localCart[index] !== theCar.id) {
          newCart.push(localCart[index])
        }
        localStorage.setItem("cart", JSON.stringify(newCart))
      
        
      }
    }

    useEffect(()=>{
        const fetchData = async()=>{
          const data = await getSingleCar(item)
          setTheCar(data)
        }
        fetchData()
      },[])
  
    return (
      <div id="theWholeCart">
      <div id="cartSingleCar">
          {theCar ?         <>
        <img src={theCar.photo_url} />
        <div className="cartInfo">
        <p>
          {theCar.make} {theCar.model} {theCar.year}
        </p>
        <p>${theCar.price}</p>
        <span onClick={removeCar} className="addToCartPlus">
            <span class="material-symbols-outlined" >
              remove_shopping_cart
            </span>
            Remove From Cart
          </span></div>
        </>:null}
  
      </div></div>
    );

}

export default GuestCartItem