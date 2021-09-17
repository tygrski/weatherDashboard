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
  
  
  //create  list element and append to UL
  var li = document.createElement("li");
  li.innerHTML = cityName;
  console.log(li);
  // appendChild and add it to the list
  var toList = document.getElementById("cityList");
  console.log(toList);
  toList.appendChild(li);
};

// fetch UV index api
function getCoordinates (lat,lon) {
  var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=98c6d72f0081cffab8d92e5d78183d22&units=imperial` 
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => renderUvi(data))
};

// add UV index weather display
function renderUvi(weather) {
  document.getElementById("uv-index").textContent = `UV Index: ${weather.current.uvi}`;
};

// add data to display
function renderTemp(weather) {
  document.getElementById("cityName-date").textContent = `City: ${weather.name}`;
  document.getElementById("temp").textContent = `Current Temperature: ${weather.main.temp} f`;
  document.getElementById("wind").textContent = `Wind Speed: ${weather.wind.speed} mph`;
  document.getElementById("humidity").textContent = `Humidity: ${weather.main.humidity} %`;
 };

// add 5 day forecast

// set & get items to local storage

