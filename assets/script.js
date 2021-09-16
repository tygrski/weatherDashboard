// click function to select city and start search 
function getInputValue() {
// Selecting the input element and get its value 
var cityName = document.getElementById('textinput').value;
// fetch request for weather API for selected city 
var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=98c6d72f0081cffab8d92e5d78183d22&units=imperial`
fetch(apiUrl)
  .then(response => response.json())
  .then(data => { 
  renderTemp(data);
  getCoordinates(data.coord.lat,data.coord.lon);
  console.log(data);
})
};

// fetch UV index api
function getCoordinates (lat,lon) {
  var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=98c6d72f0081cffab8d92e5d78183d22&units=imperial` 
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => renderUvi(data))
};

// display weather data
function renderUvi(weather) {
  document.getElementById("uv-index").textContent = `UV Index: ${weather.current.uvi}`
};

function renderTemp(weather) {
  document.getElementById("cityName-date").textContent = `City: ${weather.name}`
  document.getElementById("temp").textContent = `Current Temperature: ${weather.main.temp} f`
  document.getElementById("wind").textContent = `Wind Speed: ${weather.wind.speed} mph`
  document.getElementById("humidity").textContent = `Humidity: ${weather.main.humidity} %`
 
};

// append weather data to display and city to selected list
document.getElementById("submitbtn").onclick = function() {
  var text = document.getElementById("textinput").value; 
  //create  list element
  var li = "<li>" + text + "</li>";
  // appendChild and add it to the list!
  document.getElementById("citylist").appendChild(li);
};

// add 5 day forecast


// set & get items to local storage

// get from local storage