import React, {useState} from "react";

const EditAdminCar = (props) => {
    const setEditCar = props.setEditCar
    const user = props.user
    const car = props.car

    async function closeEditCarMenu(){
        setEditCar(false)
    }

    const [editCarInfo, setEditCarInfo] = useState({
      seller: user.id, 
      type: car.type, 
      make: car.make, 
      model: car.model, 
      year:  car.year,
      color: car.color,
      price: car.price, 
      transmission_type: car.trasmission_type, 
      mileage: car.mileage, 
      interior_color: car.interior_color, 
      doors: car.doors, 
      seats: car.seats, 
      mpg: car.mpg, 
      inventory: 1, 
      photo_url: car.photo_url, 
      drive_type: car.drive_type, 
      new_used: car.new_used,
    })

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
      <form>
        <span>
        <label htmlFor="type">Type: </label>
        <select id="type" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, type: e.target.value })
            } required>
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
        <input id="make" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, make: e.target.value })
            } required/>
        </span>
        <br />


        <span>
        <label for="model">Model: </label>
        <input id="model" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, model: e.target.value })
            } required/>
        </span>
        <br />


        <span>
        <label for="year">Year: </label>
        <input type="number" id="year" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, year: e.target.value })
            } required />
        </span>
        <br />


        <span>
        <label for="color">Color: </label>
        <input id="color" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, color: e.target.value })
            } required/>
        </span>
        <br />


        <span>
        <label for="price">Price: </label>
        <input type="number" id="price" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, price: e.target.value })
            } required/>
        </span>
        <br />


        <span>
        <label htmlFor="transmission_type">Transmission: </label>
        <select id="transmission_type" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, transmission_type: e.target.value })
            } required>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
        </span>
        <br />


        <span>
        <label htmlFor="mileage">Mileage: </label>
        <input type="number" id="mileage" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, mileage: e.target.value })
            } required/>
        </span>
        <br />


        <span>
        <label htmlFor="interior_color">Interior Color: </label>
        <input id="interior_color" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, interior_color: e.target.value })
            } required/>
        </span>
        <br />


        <span>
        <label htmlFor="seats">Seats: </label>
        <input type="number" id="seats" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, seats: e.target.value })
            } required/>
        </span>
        <br />


        <span>
        <label htmlFor="doors">Doors: </label>
        <input type="number" id="doors" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, doors: e.target.value })
            } required/>
        </span>
        <br />


        <span>
        <label htmlFor="mpg">MPG: </label>
        <input type="number" id="mpg" onChange={(e) =>
              setEditCarInfo({ ...editCarInfo, mpg: e.target.value })
            } required/>
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
            } required>
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
            } required>
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
    )
}

export default EditAdminCar