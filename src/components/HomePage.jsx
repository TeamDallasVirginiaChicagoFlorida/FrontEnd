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
  const [filteredCars, setFilteredCars] = useState([])
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
        <h2>This is the homepage component, it should be the parent component for the all cars list, the filter, the searchbar</h2>
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setFilteredCars={setFilteredCars} />
        <AllCars allCars = {allCars}/>
        <FiltersMenu />
  </div>
  );
};

export default HomePage;