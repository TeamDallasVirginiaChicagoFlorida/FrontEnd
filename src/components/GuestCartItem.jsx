import React, {useState, useEffect} from "react";
import { getSingleCar } from "../api-adapter";

const GuestCartItem  = (props) => {
    const item = props.item;
    const [theCar, setTheCar] = useState({})

    console.log(item, typeof item)

    async function removeCar() {
      const response = await deleteCarFromCart(item);
  
      !response.error && setItem(false)
    }

    useEffect(()=>{
        const fetchData = async()=>{
          const data = await getSingleCar(item)
          setTheCar(data)
        }
        fetchData()
      },[])
  
    return (
      <div id="cartSingleCar">
          {theCar ?         <>
        <img src={theCar.photo_url} />
        <p>
          {theCar.make} {theCar.model} {theCar.year}
        </p>
        <p>{theCar.price}</p>
        <button onClick={removeCar}>Remove car from cart</button>
        </>:null}
  
      </div>
    );

}

export default GuestCartItem