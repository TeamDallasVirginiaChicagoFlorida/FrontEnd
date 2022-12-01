import React from "react";
import {
    Admin,
    OrderHistory
} from './'

const MyAccount = (props) => {
  const isLoggedIn = props.isLoggedIn;
 const user = props.user
 console.log(user, "this is user")
  return (

    <div id="myAccount">
        <h1>Your Account:</h1>
        <p>Email:{user.email}</p>
       {user.admin ? <p>Account Type: Seller</p> : <p>Account Type: Buyer</p>}
        <OrderHistory isLoggedIn={isLoggedIn}/>
        {user.admin ? <Admin user={user}/>: null}
        
  </div>
  );
};

export default MyAccount;