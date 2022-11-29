import React, { useState } from "react";
import {
    Login,
    Register
} from './'
import { useNavigate, NavLink } from "react-router-dom"

const Navbar = (props) => {
    const isLoggedIn = props.isLoggedIn
    const setIsLoggedIn = props.setIsLoggedIn
    const navigate = useNavigate();
    const [loginMenu, setLoginMenu] = useState(false)
    const [error, setError] = useState(null)

    async function openMenuLogin(){
      setLoginMenu(true)
    }
    

  return (
    <>
    <div id="navbar">
        <button onClick={openMenuLogin}>LOGIN</button>
        
  </div>
  <div>
  {loginMenu ?(<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setLoginMenu={setLoginMenu} error={error} setError={setError}/>) 
  : null}

  </div>
  </>
  );
};

export default Navbar;