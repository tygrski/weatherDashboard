// click function to select city and start search 
function getInputValue() {
// Selecting the input element and get its value 
var cityName = document.getElementById('textinput').value;

// fetch request for weather API for selected city 
var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=98c6d72f0081cffab8d92e5d78183d22&units=imperial`
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // getCoordinates(data)
    renderTemp(data)
    console.log(data.coord.lat)
    console.log(data.coord.lon)
  })
};
// fetch UV index api
var lat = (data.coord.lat);
var lon = (data.coord.lon);
function getCoordinates () {
  var apiUrl2 = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=98c6d72f0081cffab8d92e5d78183d22}' 
  fetch(apiUrl2)
  .then(response => response.json())
  .then(data => {
})
};

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