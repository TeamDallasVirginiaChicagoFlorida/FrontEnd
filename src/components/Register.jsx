import React, { useState } from "react";
import registerUser from "../api-adapter"

const Register = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn
  const setRegisterMenu = props.setRegisterMenu
  const setError = props.setError
  const error = props.error
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    password: "",
    admin: false
  })

  return (
    <div id="register">
      <div className={`registering`} id="registerMenu">
        <div className="registerMenu">
          <span
            className="material-symbols-outlined"
            onClick={closeRegisterMenu}
            alt="Close Menu"
          >
            close
          </span>
          <form onSubmit={handleSubmit}>
            <h3>register</h3>
            <label htmlFor="email">Email: </label>
            <input
              id="email"
              type="email"
              onChange={(e) =>
                setRegisterInfo({ ...registerInfo, email: e.target.value })
              }
              value={registerInfo.email}
              required
            />
            <br />
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              type="password"
              onChange={(e) =>
                setRegisterInfo({ ...registerInfo, password: e.target.value })
              }
              value={registerInfo.password}
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

export default Register;