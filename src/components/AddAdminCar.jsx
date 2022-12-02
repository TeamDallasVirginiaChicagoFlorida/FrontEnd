import React, { useState } from "react";
import { createNewCarPost } from "../api-adapter";

const AddAdminCar = (props) => {
	const setSellingCar = props.setSellingCar
	const user = props.user
	async function closeSellCarMenu (){
		setSellingCar(false)
	}

const [newCarInfo, setNewCarInfo] = useState({
	seller: user.id,
	type: "",
    make: "",
    model: "",
    year: "",
    color: "",
    price: "",
    transmission_type: "",
    mileage:"",
    interior_color: "",
    doors:"",
    seats:"",
    mpg:"",
    inventory: 1 ,
    photo_url: "https://res.cloudinary.com/dyqjp130l/image/upload/v1669994299/Cars/lightning_mcqueen_w1mrdh.jpg",
    drive_type: "",
    new_used: ""
})

async function handleSubmit(e){
	e.preventDefault()
	const type = newCarInfo.type
	const make = newCarInfo.make
	const model = newCarInfo.model
	const year = newCarInfo.year
	const color = newCarInfo.color
	const price = newCarInfo.price
	const transmission_type = newCarInfo.transmission_type
	const mileage = newCarInfo.mileage
	const interior_color = newCarInfo.interior_color
	const doors = newCarInfo.doors
	const seats = newCarInfo.seats
	const mpg = newCarInfo.mpg
	const inventory = newCarInfo.inventory
	const photo_url = newCarInfo.photo_url
	const drive_type = newCarInfo.drive_type
	const new_used = newCarInfo.new_used

	const response = await createNewCarPost(type, make, model, year, color, price, transmission_type, mileage, interior_color, doors, seats, mpg, inventory, photo_url, drive_type, new_used)

	// if(response.message){
	// 	console.log('come back to do the error message')
	// }else{
		setSellingCar(false)
	// }
	setNewCarInfo({
		seller: user.id,
		type: "",
		make: "",
		model: "",
		year,
		color: "",
		price,
		transmission_type: "",
		mileage,
		interior_color: "",
		doors,
		seats,
		mpg,
		inventory: 1 ,
		photo_url: "https://res.cloudinary.com/dyqjp130l/image/upload/v1669994299/Cars/lightning_mcqueen_w1mrdh.jpg",
		drive_type: "",
		new_used: ""
	})
	
}
	return (
    <div id="addAdminCar">
		<div className="popupMenu">
            <h3>Sell a Car</h3>
      <span
        className="material-symbols-outlined x"
        onClick={closeSellCarMenu}
        alt="Close Menu"
      >
        close
      </span>

      <form onSubmit={handleSubmit}>
        <span>
        <label htmlFor="type">Type: </label>
        <select id="type" onChange={(e)=>{
			setNewCarInfo({...newCarInfo, type: e.target.value})
		}}>
          <option value="Coupe">Coupe</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Van">Van</option>
          <option value="Truck">Truck</option>
          <option value="Hatchback">Hatchback</option>
        </select>
        </span>
        <br />

        <span>
        <label for="make">Make: </label>
        <input id="make" onChange={(e)=>{
			setNewCarInfo({...newCarInfo, make: e.target.value })
		}} required/>
        </span>
        <br />


        <span>
        <label for="model">Model: </label>
        <input id="model" onChange={(e)=>{
			setNewCarInfo({...newCarInfo, model: e.target.value })
		}} required/>
        </span>
        <br />


        <span>
        <label for="year">Year: </label>
        <input type="number" id="year" onChange={(e)=>{
			setNewCarInfo({...newCarInfo, year: e.target.value })
		}} required/>
        </span>
        <br />


        <span>
        <label for="color">Color: </label>
        <input id="color" onChange={(e)=>{
			setNewCarInfo({...newCarInfo, color: e.target.value })
		}} required/>
        </span>
        <br />


        <span>
        <label for="price">Price: </label>
        <input type="number" id="price" onChange={(e)=>{
			setNewCarInfo({...newCarInfo, price: e.target.value })
		}} required/>
        </span>
        <br />


        <span>
        <label htmlFor="transmission_type">Transmission: </label>
        <select id="transmission_type" onChange={(e)=>{
			setNewCarInfo({...newCarInfo, transmission_type: e.target.value })
		}} required>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
        </span>
        <br />


        <span>
        <label htmlFor="mileage">Mileage: </label>
        <input type="number" id="mileage" onChange={(e)=>{
			setNewCarInfo({...newCarInfo, mileage: e.target.value })
		}} required/>
        </span>
        <br />


        <span>
        <label htmlFor="interior_color">Interior Color: </label>
        <input id="interior_color" onChange={(e)=>{
			setNewCarInfo({...newCarInfo, interior_color: e.target.value })
		}} required/>
        </span>
        <br />


        <span>
        <label htmlFor="seats">Seats: </label>
        <input type="number" id="seats" onChange={(e)=>{
			setNewCarInfo({...newCarInfo, seats: e.target.value })
		}} required/>
        </span>
        <br />


        <span>
        <label htmlFor="doors">Doors: </label>
        <input type="number" id="doors" onChange={(e)=>{
			setNewCarInfo({...newCarInfo, doors: e.target.value })
		}} required/>
        </span>
        <br />


        <span>
        <label htmlFor="mpg">MPG: </label>
        <input type="number" id="mpg" onChange={(e)=>{
			setNewCarInfo({...newCarInfo, mpg: e.target.value })
		}} required/>
        </span>
        <br />


        <span>
        <label htmlFor="photo_url">Photo: </label>
        <input id="photo_url" type="file" name="file" />
        </span>
        <br />


        <span>
        <label htmlFor="drive_type">Drive Type:</label>
        <select id="drive_type" onChange={(e)=>{
			setNewCarInfo({...newCarInfo, drive_type: e.target.value })
		}}required>
          <option value="4WD">4WD</option>
          <option value="FWD">FWD</option>
          <option value="RWD">RWD</option>
        </select>
        </span>
        <br />


        <span>
        <label htmlFor="new_used">Condition: </label>
        <select id="new_used" onChange={(e)=>{
			setNewCarInfo({...newCarInfo, new_used: e.target.value })
		}}required>
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>
        </span>
        <br />

        <button className="submitButton" type="submit">
              SUBMIT
            </button>

      </form>
      
	  </div>
    </div>
  );
};

export default AddAdminCar;
