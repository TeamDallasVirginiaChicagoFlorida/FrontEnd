import React, { useState, useEffect } from "react";
import { getAllCars } from "../api-adapter";

const SearchBar = () => {
//   const [vehicles, setVehicles] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       const allData = await getAllCars(setVehicles);
//     }
//     fetchData();
//   }, []);

//   function searchMatches(vehicle, text) {
//     return (
//       vehicle.make.toLowerCase().includes(text)
//     );
//   }
//   const filteredSearch = vehicles.filter((vehicle) =>
//   searchMatches(vehicle, searchTerm));
//   const vehiclesToDisplay = searchTerm.length ? filteredSearch : vehicles;
  
//   return (
//     <div id="searchbar">
//       <p className="titleText">Search Vehicles: </p>
//       <span className="Search">
//         <input
//         type="text"
//         className="searchbar"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(event)=>{
//           setSearchTerm(event.target.value);
//         }}
//         />
//       </span>
//       <div className="box">
//         {vehiclesToDisplay.map((vehicle)=>{
//           return(
//             <div className="vehicleBox">
//               <div className="carMake">Make: {vehicle.make}</div>
//               <div className="carModel">Model: {vehicle.model}</div>
//               <div className="carYear">Year: {vehicle.year}</div>


//             </div>  
//           )
//         })}

//       </div>
//     </div>
   
//   );
};

export default SearchBar;
