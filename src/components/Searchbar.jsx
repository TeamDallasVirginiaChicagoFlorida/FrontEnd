import React, { useState, useEffect } from "react";
import { getAllCars } from "../api-adapter";

const SearchBar = (props) => {
  const [vehicles, setVehicles] = useState([]);
  const searchTerm = props.searchTerm;
  const setSearchTerm = props.setSearchTerm;
  const setFilteredCars = props.setFilteredCars;


  // function searchMatches(vehicle, text) {
  //   return vehicle.make.toLowerCase().includes(text);
  // }
  // const filteredSearch = vehicles.filter((vehicle) =>
  //   searchMatches(vehicle, searchTerm)
  // );
  // const vehiclesToDisplay = searchTerm.length ? filteredSearch : vehicles;
  // setFilteredCars(vehiclesToDisplay)

  return (
    <div id="searchBar">
      <span className="Search">
        <input
          type="text"
          className="searchBar"
          placeholder="Search vehicles..."
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </span>
    </div>
  );
};

export default SearchBar;
