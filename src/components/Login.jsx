import React, { useState } from "react";
import { logInUser } from "../api-adapter";

const Login = (props) => {
  const isLoggedIn = props.isLoggedIn
  const setIsLoggedIn = props.setIsLoggedIn

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  })

  async function closeLoginMenu() {
    console.log("you tried to close the login menu and it didn't do anything!")
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
    } else {
      console.log("Error handling go here")
    }

    setLoginInfo({
      email: "",
      password: ""
    })
  }

  return (
    <div id="login">
            <div className={`loggingin`} id="loginMenu">
      <div className="loginMenu">
        <span
          className="material-symbols-outlined"
          onClick={closeLoginMenu}
          alt="Close Menu"
        >
          close
        </span>
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, email: e.target.value })
            }
            value={loginInfo.email}
            required
          />
          <br />
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
          {/* {error ? <small className="error">{error}</small> : null} */}

          <br />
          <button className="submitButton" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Login;