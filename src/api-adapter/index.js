// all API fetch requests go here

// const BASE_URL = "https://graceshoperbackenddallasvirginiachicagof.onrender.com/api";
const BASE_URL = "http://localhost:8080/api";

//////////////////// User API Routes ////////////////////

//login
export async function logInUser(email, password) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    };
    const response = await fetch(`${BASE_URL}/users/login`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

//register

export async function registerUser(email, password, admin) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        admin,
      }),
    };
    const response = await fetch(`${BASE_URL}/users/register`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
// users/me

export async function userInfo() {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(`${BASE_URL}/users/me`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

//////////////////// Car API Routes ////////////////////

// get all cars
export async function getAllCars() {
  try {
    const options = {
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(`${BASE_URL}/cars`, options);
    const cars = await response.json();

    return cars;
  } catch (error) {
    throw error;
  }
}
// get single car
export async function getSingleCar(id) {
  try {
    const options = {
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(`${BASE_URL}/cars/${id}`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
// post a new car for sale
export async function createNewCarPost(
  type,
  make,
  model,
  year,
  color,
  price,
  transmission_type,
  mileage,
  interior_color,
  doors,
  seats,
  mpg,
  inventory,
  photo_url,
  drive_type,
  new_used
) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        type,
        make,
        model,
        year,
        color,
        price,
        transmission_type,
        mileage,
        interior_color,
        doors,
        seats,
        mpg,
        inventory,
        photo_url,
        drive_type,
        new_used,
      }),
    };
    const response = await fetch(`${BASE_URL}/cars`, options);
    const result = await response.json();
    return result.data;
  } catch (error) {
    throw error;
  }
}
// edit car for sale
export async function updateCar(
  id,
  type,
  make,
  model,
  year,
  color,
  price,
  transmission_type,
  mileage,
  interior_color,
  doors,
  seats,
  mpg,
  inventory,
  photo_url,
  drive_type,
  new_used
) {
  try {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        type,
        make,
        model,
        year,
        color,
        price,
        transmission_type,
        mileage,
        interior_color,
        doors,
        seats,
        mpg,
        inventory,
        photo_url,
        drive_type,
        new_used,
      }),
    };
    const response = await fetch(`${BASE_URL}/cars/${id}`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
// remove car for sale
export async function deleteCar(id) {
  try {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(`${BASE_URL}/cars/${id}`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
//////////////////// Cart API Routes ////////////////////

// get logged in users cart

export async function getCartByUser() {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(`${BASE_URL}/cart`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

// checkout a cart

export async function checkOut(id){
  try {
    const options={
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      }
    };
    const response = await fetch(`${BASE_URL}/cart/${id}`, options);
    const result = await response.json();
    return result
  } catch (error) {
    throw error;
  }
}

// get order history

//////////////////// Cart Items API Routes ////////////////////

// add car to cart

// delete car from cart
export async function deleteCarFromCart(id){
  try {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(`${BASE_URL}/cart_items/${id}`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error
  }
}

// ?? update car in cart ??
