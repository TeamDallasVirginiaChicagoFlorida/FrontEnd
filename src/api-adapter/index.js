// all API fetch requests go here

// const BASE_URL = "THIS IS WHERE THE DEPLOYED BACKEND URL WILL GO";
const BASE_URL = "http://localhost:8080/api";
const token = localStorage.getItem("token")

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
        user: {
          email,
          password,
        },
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

// users/me

export async function userInfo() {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    };
    const response = await fetch(`${BASE_URL}/users/me`, options);
    const result = await response.json();
    return result
  } catch (error) {
    throw error;
  }
}

//////////////////// Car API Routes ////////////////////

// get all cars
export async function getAllCars(){
  try {
    const options = {
      headers: { "Content-Type":"application/json"}
    }
    const response = await fetch (`${BASE_URL}/cars`, options)
    const cars = await response.json()

    return cars
    
  } catch (error) {
    console.log(error, "AN ERROR HAS OCCURRED FINDING CARS")
  }
}
// get single car

// post a new car for sale

// edit car for sale

// remove car for sale

//////////////////// Cart API Routes ////////////////////

// get logged in users cart

// checkout a cart

// get order history

//////////////////// Cart Items API Routes ////////////////////

// add car to cart

// delete car from cart

// ?? update car in cart ??
