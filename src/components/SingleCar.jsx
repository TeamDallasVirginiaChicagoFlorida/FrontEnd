import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { addCarToCart, getCartByUser } from "../api-adapter";


const SingleCar = (props) => {
  const car = props.car;
  const isLoggedIn = props.isLoggedIn;
  const [currentId, setCurrentId] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCartByUser();
      const id = data[0].id;
      setCurrentId(id);
    };
    fetchData();
  }, []);


  async function addCar() {
    await addCarToCart(car.id, currentId)
    console.log("you added a car, congrats!")
  }


  return (
    <div id="singleCar">
      <h2>
        {car.make} {car.year} {car.model}
      </h2>
      <img src={car.photo_url} />
      <h3>${car.price}</h3>
      <Link to={`/carDetails/${car.id}`}>
        <button> See More Details</button>
      </Link>
      <button onClick={addCar}>Add To Cart</button>
    </div>
  );
};

export default SingleCar;
