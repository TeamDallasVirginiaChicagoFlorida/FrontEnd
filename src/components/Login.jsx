import React, { useState } from "react";
import { logInUser } from "../api-adapter";

const Login = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const setLoginMenu = props.setLoginMenu;
  const setError = props.setError;
  const error = props.error;

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
            {error ? <small className="error">{error}</small> : null}

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
