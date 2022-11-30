import React, { useState, useEffect } from "react";
import { 
    Navbar,
    HomePage,
    MyAccount,
    Cart,
    SingleCarDetails,
    Footer,
    AllCars, 
} from './'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { userInfo } from "../api-adapter";
//import API routes from "../api-adapter"

const Main = () => {
  const[isLoggedIn, setIsLoggedIn] = useState(false)
  const[user, setUser] = useState({})
  useEffect(()=>{
    const previousUser = localStorage.getItem("token")
    if(previousUser){
      setIsLoggedIn(previousUser)
      const fetchData = async ()=>{
        const data = await userInfo("")
        setUser(data)
      }
      fetchData();
    }

  },[isLoggedIn])

  return (
    <Router>
    <div id="main">
      <Navbar 
      isLoggedIn={isLoggedIn} 
      setIsLoggedIn={setIsLoggedIn}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cardetails/:id" element={<SingleCarDetails />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
};

export default Main;