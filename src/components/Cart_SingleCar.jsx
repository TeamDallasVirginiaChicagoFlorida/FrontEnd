import React from "react";

const Cart_SingleCar = (props) => {
    const item = props.item
return(
    <div id="adminAddCar">
    <img src={item.photo_url} />
    <p>{item.make} {item.model} {item.year}</p>
    <p>{item.price}</p>
</div>
)
}

export default Cart_SingleCar