import React from "react";
import { deleteCar, deleteCarFromCart } from "../api-adapter";

const Cart_SingleCar = (props) => {
    const item = props.item
    async function removeCar(){
        await deleteCarFromCart(item.id)};

return(
    <div id="adminAddCar">
    <img src={item.photo_url} />
    <p>{item.make} {item.model} {item.year}</p>
    <p>{item.price}</p>
    <button onClick={removeCar}>Remove car from cart</button>
</div>
)
}

export default Cart_SingleCar