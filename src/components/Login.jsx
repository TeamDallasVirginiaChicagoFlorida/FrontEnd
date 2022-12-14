import React, { useState, useEffect } from "react";
import { addCarToCart, logInUser, getCartByUser } from "../api-adapter";

const Login = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const setLoginMenu = props.setLoginMenu;
  const setError = props.setError;
  const error = props.error;
  const setRegisterMenu = props.setRegisterMenu;
  const isLoggedIn = props.isLoggedIn;
  const [currentId, setCurrentId] = useState(null);

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  async function closeLoginMenu() {
    setLoginMenu(false);
    setError(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const email = loginInfo.email;
    const password = loginInfo.password;
    const response = await logInUser(email, password);

    localStorage.removeItem("token");
    if (response && response.token) {
      localStorage.setItem("token", response.token);
      setIsLoggedIn(response.token);

      const data = await getCartByUser();
      console.log(data);
      const id = await data[0].id;
      console.log(id);

      if (localStorage.getItem("cart")) {
        const localCart = localStorage.getItem("cart");
        const theCart = JSON.parse(localCart);
        for (let i = 0; i < theCart.length; i++) {
          const carId = theCart[i];

          const addedCar = await addCarToCart(carId, id);
          console.log(addedCar, "we added this car to your cart");
        }
        localStorage.removeItem("cart");
      }

      setLoginMenu(false);
      setError(null);
    } else {
      setError("User with that email not found or password does not match");
    }

    setLoginInfo({
      email: "",
      password: "",
    });
  }

  async function changeMenu() {
    setLoginMenu(false);
    setRegisterMenu(true);
  }

  return (
    <div id="login">
      <div className={`loggingin`} id="loginMenu">
        <div className="popupMenu">
          <span
            className="material-symbols-outlined x"
            onClick={closeLoginMenu}
            alt="Close Menu"
          >
            close
          </span>
          <form onSubmit={handleSubmit}>
            <h3 id="loginHeader">Login</h3>
            <div id="emailLogin">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                onChange={(e) =>
                  setLoginInfo({ ...loginInfo, email: e.target.value })
                }
                value={loginInfo.email}
                required
              />
            </div>
            <div id="passwordLogin">
              <label htmlFor="password">Password: </label>
              <input
                id="password"
                type="password"
                onChange={(e) =>
                  setLoginInfo({ ...loginInfo, password: e.target.value })
                }
                value={loginInfo.password}
                required
              />
            </div>
            {error ? <small className="error">{error}</small> : null}

            <br />
            <button id="submitLoginFormBtn" className="submitButton SeeMoreDetailsBtn" type="submit">
              SUBMIT
            </button>
            <button id="noAccount" onClick={changeMenu}>
              Don't have an account? Click here
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
