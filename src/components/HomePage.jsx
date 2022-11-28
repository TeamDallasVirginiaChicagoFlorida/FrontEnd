import React from "react";
import {
    AllCars,
    FiltersMenu,
    Searchbar
} from './'

const HomePage = () => {
  return (
    <div id="homePage">
        <h2>This is the homepage component, it should be the parent component for the all cars list, the filter, the searchbar</h2>
        <Searchbar />
        <AllCars />
        <FiltersMenu />
  </div>
  );
};

export default HomePage;