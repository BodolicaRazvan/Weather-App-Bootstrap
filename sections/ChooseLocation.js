const bucuresti = document.querySelector(".dropdown-menu .bucuresti");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const cluj = document.querySelector(".dropdown-menu .cluj");
const constanta = document.querySelector(".dropdown-menu .constanta");
const bacau = document.querySelector(".dropdown-menu .bacau");

function updateCurrentCity(city) {
  const currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = city;
}

function updateWeather(city) {
  localStorage.setItem("city", city);
  updateCurrentCity(city);
  displayCurrentWeather(city);
  displayWeatherForecast(city);
}

bucuresti.addEventListener("click", function () {
  updateWeather("București");
});
timisoara.addEventListener("click", function () {
  updateWeather("Timișoara");
});
cluj.addEventListener("click", function () {
  updateWeather("Cluj");
});
constanta.addEventListener("click", function () {
  updateWeather("Constanța");
});
bacau.addEventListener("click", function () {
  updateWeather("Bacău");
});

