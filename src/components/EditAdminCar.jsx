import React from "react";

const EditAdminCar = (props) => {
    return(
        <div id="editAdminCarMenu">
            <form>
                <label htmlFor="type">Type: </label>
                <select id="type">
                    <option value="Coupe">Coupe</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Van">Van</option>
                    <option value="Truck">Truck</option>
                    <option value="Hatchback">Hatchback</option>
                </select>

                <label htmlFor="make">Make: </label>
                <input id="make"/>

                <label htmlFor="model">Model: </label>
                <input id="model"/>

                <label htmlFor="year">Year: </label>
                <input type="number" id="year"/>

                <label htmlFor="color">Color: </label>
                <input id="color" />

                <label htmlFor="price">Price: </label>
                <input type="number" id="price" />

                <label htmlFor="transmission_type">Transmission: </label>
                <select id="transmission_type">
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                </select>

                <label htmlFor="mileage">Mileage: </label>
                <input type="number" id="mileage" />

                <label htmlFor="interior_color">Interior color: </label>
                <input id="interior_color" />

                <label htmlFor="seat">Seat: </label>
                <input type="number" id="seats" />

                <label htmlFor="doors">Doors: </label>
                <input type="number" id="doors" />

                <label htmlFor="mpg">MPG: </label>
                <input type="number" id="mpg" />

                <label htmlFor="photo_url">Photo: </label>
                <input id="photo_url" type="file" name="file" />

                <label htmlFor="drive_type">Drive Type: </label>
                <select id="drive_type">
                    <option value="4WD">4WD</option>
                    <option value="FWD">FWD</option>
                    <option value="RWD">RWD</option>
                </select>

                <label htmlFor="new_used">Condition: </label>
                <select id="new_used">
                    <option value="new">New</option>
                    <option value="used">Used</option>
                </select>
            </form>
        </div>
    )
}

export default EditAdminCar