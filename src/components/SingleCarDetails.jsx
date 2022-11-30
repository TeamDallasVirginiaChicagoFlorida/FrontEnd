import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SingleCarDetails = (props) => {
  const {id} = useParams();
  const car = props.filterCars(id)[0]
  const navigate = useNavigate();
  const [carDetails, setCarDetails] = useState({
        type: '',
        make: '',
        model: '',
        year: '',
        color: '',
        price: '',
        transmission_type: '',
        mileage: '',
        interior_color: '',
        doors: '',
        seats: '',
        mpg: '',
        inventory: '',
        photo_url: '',
        drive_type: '',
        new_used: '',
  })
  useEffect(()=>{
    car?
    setCarDetails(
      {        
      type: car.type,
      make: car.make,
      model: car.model,
      year: car.year,
      color: car.color,
      price: car.price,
      transmission_type: car.transmission_type,
      mileage: car.mileage,
      interior_color: car.interior_color,
      doors: car.doors,
      seats: car.seats,
      mpg: car.mpg,
      inventory: car.inventory,
      photo_url: car.photo_url,
      drive_type: car.drive_type,
      new_used: car.new_used,}
    ): null
  }, [car])
  return (
    <div id="singleCarDetails">
        <h2>This is the SingleCarDetails component, the page where we show more info about a single car</h2>
  {car ? (<>
    <div className="box">
     <div>{car.seller} </div>
     <div>{car.type} </div>
     <div>{car.make} </div>
     <div>{car.model} </div>
     <div>{car.year} </div>
     <div>{car.color} </div>
     <div>{car.price} </div>
     <div>{car.transmission_type} </div>
     <div>{car.mileage} </div>
     <div>{car.interior_color} </div>
     <div>{car.doors} </div>
     <div>{car.seats} </div>
     <div>{car.mpg} </div>
     <div>{car.inventory} </div>
     <div>{car.photo_url} </div>
     <div>{car.drive_type} </div>
     <div>{car.new_used} </div>
    </div>
    
    </>
    ):(
      <div> loading the cars... </div>
      )}
  </div>

    
  
  );
};

export default SingleCarDetails;