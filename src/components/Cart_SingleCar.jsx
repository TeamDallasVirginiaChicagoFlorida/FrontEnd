import React, { useState } from "react";
import { deleteCar, deleteCarFromCart } from "../api-adapter";

const Cart_SingleCar = (props) => {
  const [item, setItem] = useState(props.item);
  async function removeCar() {
    const response = await deleteCarFromCart(item.id);

    !response.error && setItem(false)
  }

  return (
    <div id="cartSingleCar">
        {item ?         <>
      <img src={item.photo_url} />
      <p>
        {item.make} {item.model} {item.year}
      </p>
      <p>{item.price}</p>
      <button onClick={removeCar}>Remove car from cart</button>
      </>:null}

    </div>
  );
};

export default Cart_SingleCar;
