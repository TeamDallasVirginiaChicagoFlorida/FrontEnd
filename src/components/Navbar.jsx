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
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  }

  return (
    <>
      <div id="navbar">
        <NavLink to="/">
        <img id="logo" src={require("./images/SMALL COPY OF LOGO.png")}/></NavLink>
        <div id="navbuttons">
          <div id="cartAndAccount">
          <NavLink to="/cart">
            <button><span id="carticon" className="material-symbols-outlined">
shopping_cart
</span> CART</button>
          </NavLink>
          {isLoggedIn?<NavLink to="/myaccount">
                <button>MY ACCOUNT</button>
              </NavLink>:null}
              </div>
          {isLoggedIn ? (
              <button onClick={logout}>LOGOUT</button>
          ) : (
            <div id="loginAndRegister">
              <button onClick={openMenuLogin}>LOGIN</button>
              <button onClick={openRegisterMenu}>REGISTER</button>
            </div>
          )}
        </div>
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
