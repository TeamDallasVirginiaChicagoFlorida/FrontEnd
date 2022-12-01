import React from "react";
import {
    AdminAddCar,
    OrderHistory
} from './'

const MyAccount = (props) => {
  const isLoggedIn = props.isLoggedIn;
 const user = props.user
 console.log(user, "this is user")
  return (

    <div id="myAccount">
        <h2>Your Account:</h2>
        <p>Email:{user.email}</p>
       {user.admin ? <p>Account Type: Seller</p> : <p>Account Type: Buyer</p>}
        <OrderHistory isLoggedIn={isLoggedIn}/>
        <AdminAddCar />
  </div>
  );
};

export default MyAccount;