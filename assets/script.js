// click function to select city and start search 
addEventListener
function getInputValue(){
  // Selecting the input element and get its value 
var cityName = $('#textinput').value;
// fetch request for weather API for selected city 
var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=98c6d72f0081cffab8d92e5d78183d22&units=imperial`
fetch(apiUrl)
  .then(response => response.json())
  .then(data => 
    // console.log(data));
    renderTemp(data))
//  api 2

// display weather data
function renderTemp(weather) {
  console.log(weather)
  document.getElementById("cityName-date").textContent = `City: ${weather.name}`
  document.getElementById("temp").textContent = `Current Temperature: ${weather.main.temp} f`
  document.getElementById("wind").textContent = `Wind Speed: ${weather.wind.speed} mph`
  document.getElementById("humidity").textContent = `Humidity: ${weather.main.humidity} %`
  document.getElementById("uv-index").textContent = `UV Index: ${weather.current.uvi}`
}


// append weather data to display and city to selected list

// set & get items to local storage