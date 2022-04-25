let now = new Date();
let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let year = now.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

let currentDate = document.querySelector("#currentDate");
currentDate.innerHTML = `${day}, ${date} ${month} ${year}`;

let currentTime = document.querySelector("#currentTime");
currentTime.innerHTML = `${hours}${minutes}HRS`;

function showWeather(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#today-celsius-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#currentWeather").innerHTML =
    response.data.weather[0].main;
  document.querySelector("#humidity").innerHTML = `Humidity: ${Math.round(
    response.data.main.humidity
  )}%`;
  document.querySelector("#wind-speed").innerHTML = `Wind: ${Math.round(
    response.data.wind.speed
  )}m/s`;
}

function cityReveal(event) {
  event.preventDefault();
  let apiKey = "194a2ed5d88763b4a384ee5dac8ac88b";
  let searchCity = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}
let cityForm = document.querySelector("#search-city");
cityForm.addEventListener("submit", cityReveal);

function showPosition(position) {
  let apiKey1 = "194a2ed5d88763b4a384ee5dac8ac88b";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey1}`;
  axios.get(url).then(showWeather);
}
let currentButton = document.querySelector("#current-button");
currentButton.addEventListener("click", showPosition);

navigator.geolocation.getCurrentPosition(showPosition);

function celsiusConversion(event) {
  event.preventDefault();
  let todayCelsiusTemperature = document.querySelector(
    "#today-celsius-temperature"
  );
  todayCelsiusTemperature.innerHTML = Math.round(response.data.main.temp);
}
let todayCelsius = document.querySelector("#celsius");
todayCelsius.addEventListener("click", celsiusConversion);

function farenheitConversion(event) {
  event.preventDefault();
  let todayFarenheitTemperature = document.querySelector(
    "#today-celsius-temperature"
  );
  let todayFarenheitConversion = todayFarenheitTemperature.innerHTML;
  todayFarenheitConversion = Number(todayFarenheitConversion);
  todayFarenheitTemperature.innerHTML = Math.round(
    (todayFarenheitConversion * 9) / 5 + 32
  );
}
let todayFarenheit = document.querySelector("#farenheit");
todayFarenheit.addEventListener("click", farenheitConversion);
