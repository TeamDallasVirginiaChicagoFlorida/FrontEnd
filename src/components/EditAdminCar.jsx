import React, {useState} from "react";
import { updateCar } from "../api-adapter";

const EditAdminCar = (props) => {
    const setEditCar = props.setEditCar
    const user = props.user
    const carBeingEdited = props.carBeingEdited

    console.log(carBeingEdited, "this is the car being edited")

    async function closeEditCarMenu(){
        setEditCar(false)
    }
  

    const [editCarInfo, setEditCarInfo] = useState({
      seller: user.id, 
      type: carBeingEdited.type, 
      make: carBeingEdited.make, 
      model: carBeingEdited.model, 
      year:  carBeingEdited.year,
      color: carBeingEdited.color,
      price: carBeingEdited.price, 
      transmission_type: carBeingEdited.trasmission_type, 
      mileage: carBeingEdited.mileage, 
      interior_color: carBeingEdited.interior_color, 
      doors: carBeingEdited.doors, 
      seats: carBeingEdited.seats, 
      mpg: carBeingEdited.mpg, 
      inventory: 1, 
      photo_url: carBeingEdited.photo_url, 
      drive_type: carBeingEdited.drive_type, 
      new_used: carBeingEdited.new_used,
    })

    async function handleSubmit(event) {
      event.preventDefault();
      const id = carBeingEdited.id
      const type = editCarInfo.type
      const make = editCarInfo.make
      const model = editCarInfo.model
      const year = editCarInfo.year
      const color = editCarInfo.color
      const price = editCarInfo.price
      const transmission_type = editCarInfo.transmission_type
      const mileage = editCarInfo.mileage
      const interior_color = editCarInfo.interior_color
      const doors = editCarInfo.doors
      const seats = editCarInfo.seats
      const mpg = editCarInfo.mpg
      const inventory = editCarInfo.inventory
      const photo_url = editCarInfo.photo_url
      const drive_type = editCarInfo.drive_type
      const new_used = editCarInfo.new_used

      const response = await updateCar(id, type, make, model, year, color, price, transmission_type, mileage, interior_color, doors, seats, mpg, inventory, photo_url, drive_type, new_used)

      setEditCar(false)
    }

    return(
        <div id="editAdminCar" >
            <div className="popupMenu">
                <h3>Edit Car</h3>
      <span
        className="material-symbols-outlined x"
        onClick={closeEditCarMenu}
        alt="Close Menu"
      >
        close
      </span>
      <form onSubmit={handleSubmit}>
        <span>
        <label htmlFor="type">Type: </label>
        <select id="type" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, type: e.target.value })
            } value={editCarInfo.type} required>
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
        <label htmlFor="make">Make: </label>
        <input id="make" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, make: e.target.value })
            } value={editCarInfo.make} required/>
        </span>
        <br />


        <span>
        <label htmlFor="model">Model: </label>
        <input id="model" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, model: e.target.value })
            } value={editCarInfo.model} required/>
        </span>
        <br />


        <span>
        <label htmlFor="year">Year: </label>
        <input type="number" id="year" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, year: e.target.value })
            } value={editCarInfo.year} required />
        </span>
        <br />


        <span>
        <label htmlFor="color">Color: </label>
        <input id="color" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, color: e.target.value })
            } value={editCarInfo.color} required/>
        </span>
        <br />


        <span>
        <label htmlFor="price">Price: </label>
        <input type="number" id="price" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, price: e.target.value })
            } value={editCarInfo.price} required/>
        </span>
        <br />


        <span>
        <label htmlFor="transmission_type">Transmission: </label>
        <select id="transmission_type" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, transmission_type: e.target.value })
            } value={editCarInfo.transmission_type} required>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
        </span>
        <br />


        <span>
        <label htmlFor="mileage">Mileage: </label>
        <input type="number" id="mileage" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, mileage: e.target.value })
            } value={editCarInfo.mileage} required/>
        </span>
        <br />


        <span>
        <label htmlFor="interior_color">Interior Color: </label>
        <input id="interior_color" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, interior_color: e.target.value })
            } value={editCarInfo.interior_color} required/>
        </span>
        <br />


        <span>
        <label htmlFor="seats">Seats: </label>
        <input type="number" id="seats" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, seats: e.target.value })
            } value={editCarInfo.seats} required/>
        </span>
        <br />


        <span>
        <label htmlFor="doors">Doors: </label>
        <input type="number" id="doors" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, doors: e.target.value })
            } value={editCarInfo.doors} required/>
        </span>
        <br />


        <span>
        <label htmlFor="mpg">MPG: </label>
        <input type="number" id="mpg" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, mpg: e.target.value })
            } value={editCarInfo.mpg} required/>
        </span>
        <br />


        <span>
        <label htmlFor="photo_url">Photo: </label>
        <input id="photo_url" type="file" name="file" />
        </span>
        <br />


        <span>
        <label htmlFor="drive_type">Drive Type:</label>
        <select id="drive_type" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, drive_type: e.target.value })
            } value={editCarInfo.drive_type} required>
          <option value="4WD">4WD</option>
          <option value="FWD">FWD</option>
          <option value="RWD">RWD</option>
        </select>
        </span>
        <br />


        <span>
        <label htmlFor="new_used">Condition: </label>
        <select id="new_used" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, new_used: e.target.value })
            } value={editCarInfo.new_used} required>
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>
        </span>
        <br />

        <button className="submitButton SeeMoreDetailsBtn" type="submit">
              SUBMIT
            </button>
            
            </form>
            </div>
        </div>
    )
}

export default EditAdminCar