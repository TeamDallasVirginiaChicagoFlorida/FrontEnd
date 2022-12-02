import React from "react";

const EditAdminCar = (props) => {
    const setEditCar = props.setEditCar
    async function closeEditCarMenu(){
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
      <form>
        <span>
        <label htmlFor="type">Type: </label>
        <select>
          <option value="Coupe">Coupe</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Van">Van</option>
          <option value="Truck">Truck</option>
          <option value="HatchbackHatchback"></option>
        </select>
        </span>
        <br />

        <span>
        <label for="make">Make: </label>
        <input id="make" />
        </span>
        <br />


        <span>
        <label for="model">Model: </label>
        <input id="model" />
        </span>
        <br />


        <span>
        <label for="year">Year: </label>
        <input type="number" id="year" />
        </span>
        <br />


        <span>
        <label for="color">Make: </label>
        <input id="color" />
        </span>
        <br />


        <span>
        <label for="price">Price: </label>
        <input type="number" id="price" />
        </span>
        <br />


        <span>
        <label htmlFor="transmission_type">Transmission: </label>
        <select id="transmission_type">
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
        </span>
        <br />


        <span>
        <label htmlFor="mileage">Mileage: </label>
        <input type="number" id="mileage" />
        </span>
        <br />


        <span>
        <label htmlFor="interior_color">Interior Color: </label>
        <input id="interior_color" />
        </span>
        <br />


        <span>
        <label htmlFor="seats">Seats: </label>
        <input type="number" id="seats" />
        </span>
        <br />


        <span>
        <label htmlFor="doors">Doors: </label>
        <input type="number" id="doors" />
        </span>
        <br />


        <span>
        <label htmlFor="mpg">MPG: </label>
        <input type="number" id="mpg" />
        </span>
        <br />


        <span>
        <label htmlFor="photo_url">Photo: </label>
        <input id="photo_url" type="file" name="file" />
        </span>
        <br />


        <span>
        <label htmlFor="drive_type">Drive Type:</label>
        <select id="drive_type">
          <option value="4WD">4WD</option>
          <option value="FWD">FWD</option>
          <option value="RWD">RWD</option>
        </select>
        </span>
        <br />


        <span>
        <label htmlFor="new_used">Condition: </label>
        <select id="new_used">
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