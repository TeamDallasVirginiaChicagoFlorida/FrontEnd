import React, { useState } from "react";
import { registerUser, getCartByUser, addCarToCart } from "../api-adapter";

const Register = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const setRegisterMenu = props.setRegisterMenu;
  const setError = props.setError;
  const error = props.error;
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    password: "",
    admin: false,
  });

  async function closeRegisterMenu() {
    setRegisterMenu(false);
    setError(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const email = registerInfo.email;
    const password = registerInfo.password;
    const admin = registerInfo.admin;
    const response = await registerUser(email, password, admin);

    localStorage.removeItem("token");
    if (response && response.token) {
      localStorage.setItem("token", response.token);
      setIsLoggedIn(response.token);

      const data = await getCartByUser();
      console.log(data)
      const id = await data[0].id;
      console.log(id)

    if (localStorage.getItem("cart")) {
      const localCart = (localStorage.getItem("cart"))
      const theCart = JSON.parse(localCart)
      for (let i = 0; i < theCart.length; i++) {
        const carId = theCart[i]

        const addedCar = await addCarToCart(carId, id)
        console.log(addedCar, "we added this car to your cart")
      }
      localStorage.removeItem("cart")
    }


      setRegisterMenu(false);
      setError(null);
    } else {
      setIsLoggedIn(false);
      setError(response.message);
    }
    setRegisterInfo({
      email: "",
      password: "",
      admin: false,
    });
  }

  return (
    <div id="register">
      <div className={`registering`} id="registerMenu">
        <div className="popupMenu">
          <span
            className="material-symbols-outlined x"
            onClick={closeRegisterMenu}
            alt="Close Menu"
          >
            close
          </span>
          <form onSubmit={handleSubmit}>
            <h3 id="regHeader">Register</h3>
            <div id="emailRegPopUp"><label htmlFor="email">Email: </label>
            <input
              id="email"
              type="email"
              onChange={(e) =>
                setRegisterInfo({ ...registerInfo, email: e.target.value })
              }
              value={registerInfo.email}
              required
            /></div>
            <div id="passwordRegPage"><label htmlFor="password">Password: </label>
            <input
              id="password"
              type="password"
              onChange={(e) =>
                setRegisterInfo({ ...registerInfo, password: e.target.value })
              }
              value={registerInfo.password}
              required
            /></div>
            <br/>
            <div id="accountTypeReg"><label htmlFor="account_type">Account Type: </label>
            <select
              id="account_type"
              onChange={(e) =>
                setRegisterInfo({ ...registerInfo, admin: e.target.value })
              }
            >
              <option value="false">Buyer</option>
              <option value="true">Seller</option>
            </select></div>
            {error ? <small className="error">{error}</small> : null}

            <br />
            <button id="submitLoginFormBtn" className="submitButton SeeMoreDetailsBtn" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
