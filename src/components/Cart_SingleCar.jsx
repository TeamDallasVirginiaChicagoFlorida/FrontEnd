import React, { useState } from "react";
import { deleteCar, deleteCarFromCart } from "../api-adapter";

const Cart_SingleCar = (props) => {
  const [item, setItem] = useState(props.item);
  async function removeCar() {
    const response = await deleteCarFromCart(item.id);

    !response.error && setItem(false);
  }

  return (
    <div id="theWholeCart">
  
      {item ? (
  <div id="cartSingleCar">
          <img src={item.photo_url} />
          <div className="cartInfo">
          <p>
            {item.make} {item.model} {item.year}
          </p>
          <p>${item.price}</p>

          <span className="addToCartPlus" onClick={removeCar}>
            <span className="material-symbols-outlined" >
              remove_shopping_cart
            </span>
            Remove From Cart
          </span>
          </div>
</div>
      ) : null}
    </div>
  );
};

export default Cart_SingleCar;
