import React from "react";
import {
    Login,
    Register
} from './'
import { useNavigate, NavLink } from "react-router-dom"

const Navbar = () => {
    const navigate = useNavigate();
    
  return (
    <div id="navbar">
        <h2>This is the Navbar, this should be the parent component for login and register, it should contain navlinks to home, my account, and cart</h2>
  </div>
  );
};

export default Navbar;