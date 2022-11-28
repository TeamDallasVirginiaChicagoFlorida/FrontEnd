import React, { useState, useEffect } from "react";
import { 
    Navbar,
    HomePage,
    MyAccount,
    Cart,
    SingleCarDetails,
    Footer, 
} from './'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
//import API routes from "../api-adapter"

const Main = () => {
  return (
    <Router>
    <div id="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cardetails" element={<SingleCarDetails />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
};

export default Main;