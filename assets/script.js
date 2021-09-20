 //Empty array to store cities searched by the user
var cities = [];

// set from local storage
function setStorage (cities) {
  localStorage.setItem("citiesLocalStorage", JSON.stringify(cities));
}

renderLastSearch();

// get from local storage
function getCities() {
  // Parsing the JSON string to an object
  var storedCities = JSON.parse(localStorage.getItem("citiesLocalStorage"));
  // If cities were are not null then store the city in the local storage 
  if (storedCities !== null) {
    cities = storedCities;
  }
};

// dom listener for search button click
document.getElementById('submit').addEventListener('click', getInputValue)

var cityName = document.getElementById('textinput');

// select city and start search 
function getInputValue() {
  var searchCity = cityName.value.trim();
  console.log(searchCity)
  console.log("getinput",cityName )
  // Push city input into cities array
   cities.push(searchCity);
  // addSearchedCities(cityName)
  search(searchCity)
};

 function search(cityName) {
  // fetch request for weather API for selected city 
  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=98c6d72f0081cffab8d92e5d78183d22&units=imperial`
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => { 
  renderTemp(data);
  // obtain data for UV index
  getCoordinates(data.coord.lat,data.coord.lon);
  console.log(data);
  })
  
   //create  list element and append to UL
   var button = document.createElement("button");
   button.innerHTML = cityName;
   console.log(button);
 
   // appendChild and add it to the list
   var toList = document.getElementById("cityList");
   console.log(toList);
   toList.appendChild(button);

  // Make call to function
  fiveDay (cityName);
  setStorage(cities)
};

function addSearchedCities  () {
 //create  list element and append to UL
 var button = document.createElement("button");
 button.innerHTML = cityName;
 console.log(button);

 // appendChild and add it to the list
 var toList = document.getElementById("cityList");
 console.log(toList);
 toList.appendChild(button);
};

// fetch UV index api
function getCoordinates (lat,lon) {
  var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=98c6d72f0081cffab8d92e5d78183d22&units=imperial` 
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => renderUvi(data))
};

// fetch 5 day forecast
function fiveDay (city) {
var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=98c6d72f0081cffab8d92e5d78183d22&units=imperial`
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => renderFiveDay(data))
};

// add UV index weather display
function renderUvi(weather) {
  document.getElementById("uv-index").textContent = `UV Index: ${weather.current.uvi}`;
};

// add data to display
function renderTemp(weather) {
  document.getElementById("cityName-date").textContent = `City: ${weather.name}`;
  document.getElementById("temp").textContent = `Current Temperature: ${weather.main.temp} ℉`;
  document.getElementById("wind").textContent = `Wind Speed: ${weather.wind.speed} mph`;
  document.getElementById("humidity").textContent = `Humidity: ${weather.main.humidity} %`;
 };

//  add 5 day to display
 function renderFiveDay (data) {
 console.log(data);
  console.log(data.list[0].dt_txt)
// day1
 var temp1 = data.list[2].main.temp;
 var date1 = new Date(data.list[2].dt_txt);
 var humidity1 = data.list[2].main.humidity;
 document.getElementById("dateDay1").innerHTML = `${date1.getMonth() + 1}/${date1.getDate()}/${date1.getFullYear()}`;
 document.getElementById("tempDay1").innerHTML = `Temp: ${temp1} ℉`;
 document.getElementById("humidityDay1").innerHTML = `Humidity: ${humidity1}%`;
 document.getElementById("iconDay1").setAttribute("src", `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`);

// day2
var temp2 = data.list[10].main.temp;
var date2 = new Date(data.list[10].dt_txt);
var humidity2 = data.list[10].main.humidity;
document.getElementById("dateDay2").innerHTML = `${date2.getMonth() + 1}/${date2.getDate()}/${date2.getFullYear()}`;
document.getElementById("tempDay2").innerHTML = `Temp: ${temp2} ℉`;
document.getElementById("humidityDay2").innerHTML = `Humidity: ${humidity2}%`;
document.getElementById("iconDay2").setAttribute("src", `https://openweathermap.org/img/wn/${data.list[10].weather[0].icon}@2x.png`);

// day3
var temp3 = data.list[18].main.temp;
var date3 = new Date(data.list[18].dt_txt);
var humidity3 = data.list[18].main.humidity;
document.getElementById("dateDay3").innerHTML = `${date3.getMonth() + 1}/${date3.getDate()}/${date3.getFullYear()}`;
document.getElementById("tempDay3").innerHTML = `Temp: ${temp3} ℉`;
document.getElementById("humidityDay3").innerHTML = `Humidity: ${humidity3}%`;
document.getElementById("iconDay3").setAttribute("src", `https://openweathermap.org/img/wn/${data.list[18].weather[0].icon}@2x.png`);

// day4
var temp4 = data.list[26].main.temp;
var date4 = new Date(data.list[26].dt_txt);
var humidity4 = data.list[26].main.humidity;
document.getElementById("dateDay4").innerHTML = `${date4.getMonth() + 1}/${date4.getDate()}/${date4.getFullYear()}`;
document.getElementById("tempDay4").innerHTML = `Temp: ${temp4} ℉`;
document.getElementById("humidityDay4").innerHTML = `Humidity: ${humidity4}%`;
document.getElementById("iconDay4").setAttribute("src", `https://openweathermap.org/img/wn/${data.list[26].weather[0].icon}@2x.png`);
// day5
var temp5 = data.list[34].main.temp;
var date5 = new Date(data.list[34].dt_txt);
var humidity5 = data.list[34].main.humidity;
document.getElementById("dateDay5").innerHTML = `${date5.getMonth() + 1}/${date5.getDate()}/${date5.getFullYear()}`;
document.getElementById("tempDay5").innerHTML = `Temp: ${temp5} ℉`;
document.getElementById("humidityDay5").innerHTML = `Humidity: ${humidity5}%`;
document.getElementById("iconDay5").setAttribute("src", `https://openweathermap.org/img/wn/${data.list[34].weather[0].icon}@2x.png`);
};

function renderLastSearch () {
  getCities();
  console.log(cities)
  if (cities.length) {
  search(cities[cities.length-1])
  }
};

