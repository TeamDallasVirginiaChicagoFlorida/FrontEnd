import React, {useEffect, useState} from "react";
import { getAllCars } from "../api-adapter";
import {
    AllCars,
    FiltersMenu,
    Searchbar
} from './'

const HomePage = (props) => {
  const [allCars, setAllCars]= useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const { isLoggedIn } = props.isLoggedIn

  useEffect(()=>{
    const fetchData = async()=>{
      const data = await getAllCars()
      if(searchTerm){
        setAllCars(filteredCars)
      }else{
        setAllCars(data)
      }
    }
    fetchData()
  },[])
  return (
    <div id="homePage">
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setFilteredCars={setFilteredCars} />
        <AllCars allCars = {allCars} isLoggedIn={isLoggedIn}/>
        <FiltersMenu />
  </div>
  );
};

export default HomePage;