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
    const [registerMenu, setRegisterMenu] = useState(false)

    const [error, setError] = useState(null)


    async function openMenuLogin(){
      setLoginMenu(true)
    }
    async function openRegisterMenu(){
      setRegisterMenu(true)
    }

    

  return (
    <>
    <div id="navbar">
        <button onClick={openMenuLogin}>LOGIN</button>
        <button onClick={openRegisterMenu}>REGISTER</button>

  </div>
  <div>
  {loginMenu ?(<Login setIsLoggedIn={setIsLoggedIn} setLoginMenu={setLoginMenu} error={error} setError={setError}/>) 
  : null}
  {registerMenu ? (<Register setIsLoggedIn={setIsLoggedIn} setRegisterMenu={setRegisterMenu} error={error} setError={setError}/>)
  : null}

  </div>
  </>
  );
};

export default Navbar;