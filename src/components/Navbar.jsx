import React from "react";
import {
    Login,
    Register
} from './'
import { useNavigate, NavLink } from "react-router-dom"

const Navbar = (props) => {
    const isLoggedIn = props.isLoggedIn
    const setIsLoggedIn = props.setIsLoggedIn
    const navigate = useNavigate();
    
  return (
    <>
    <div id="navbar">
        <NavLink to="/login"><button>LOGIN</button></NavLink>
        
  </div>
  <Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
  </>
  );
};

export default Navbar;