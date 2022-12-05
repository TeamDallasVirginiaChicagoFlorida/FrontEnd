import React from "react";
import { Admin, OrderHistory } from "./";

const MyAccount = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const user = props.user;

  return (
    <div className="myAccount">
      <div className="topHalf">
      <div className="AccountInfo">
        <h2>Your Account:</h2>
        <p>Email:{user.email}</p>
        {user.admin ? <p>Account Type: Seller</p> : <p>Account Type: Buyer</p>}
      </div>
      <div className="orderHistory">
        <OrderHistory isLoggedIn={isLoggedIn} />
      </div>
      </div>
      <div>
      {user.admin ? <Admin user={user} /> : null}</div>
    </div>
  );
};

export default MyAccount;
