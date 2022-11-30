import React, { useState } from "react";
import { Login, Register } from "./";
import { useNavigate, NavLink } from "react-router-dom";

const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();
  const [loginMenu, setLoginMenu] = useState(false);
  const [registerMenu, setRegisterMenu] = useState(false);

  const [error, setError] = useState(null);

  async function openMenuLogin() {
    setLoginMenu(true);
  }
  async function openRegisterMenu() {
    setRegisterMenu(true);
  }

  async function logout() {
    console.log("YOU CLICKED LOGOUT AND IT DID NOTHING");
    localStorage.removeItem("token")
    setIsLoggedIn(false)
    navigate("/")
  }

  return (
    <>
      <div id="navbar">
        <h1>HOT CARS</h1>
        {isLoggedIn ? (
          <div>
            <button onClick={logout}>LOGOUT</button>
            <NavLink to="/myaccount">
              <button>MY ACCOUNT</button>
            </NavLink>
          </div>
        ) : (
          <div>
            <button onClick={openMenuLogin}>LOGIN</button>
            <button onClick={openRegisterMenu}>REGISTER</button>
          </div>
        )}

        <NavLink to="/cart">
          <button>CART</button>
        </NavLink>
      </div>
      <div>
        {loginMenu ? (
          <Login
            setIsLoggedIn={setIsLoggedIn}
            setLoginMenu={setLoginMenu}
            setRegisterMenu={setRegisterMenu}
            error={error}
            setError={setError}
          />
        ) : null}
        {registerMenu ? (
          <Register
            setIsLoggedIn={setIsLoggedIn}
            setRegisterMenu={setRegisterMenu}
            error={error}
            setError={setError}
          />
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
