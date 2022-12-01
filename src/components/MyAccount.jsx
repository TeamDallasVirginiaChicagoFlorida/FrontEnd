import React from "react";
import {
    AdminAddCar,
    OrderHistory
} from './'

const MyAccount = (props) => {
  const isLoggedIn = props.isLoggedIn;

  return (

    <div id="myAccount">
        <h2>This is the MyAccount component, this should be the parent element for admins adding/editing/deleting cars for sale, buyers viewing order history</h2>
        <OrderHistory isLoggedIn={isLoggedIn}/>
        <AdminAddCar />
  </div>
  );
};

export default MyAccount;