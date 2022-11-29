import React, { useState } from "react";
import registerUser from "../api-adapter"

const Register = (props) => {
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    password: "",
    admin: false
  })

  
  return (
    <div id="register">
        <h2>This is the register component</h2>
  </div>
  );
};

export default Register;