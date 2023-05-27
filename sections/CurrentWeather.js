function displayCurrentWeather(city) {
    
const currentWeather = getCurrentWeatherEndPoint(city);

fetch(currentWeather)
.then((response) => response.json())
.then((data) => {

    const { name, dt, main, weather, wind } = data;

    const day = getDayOfTheWeek(dt);
    const time = getHour(dt);
    const temperature = Math.round(main.temp);
    const fellsLike = Math.round(main.feels_like);
    const weatherDescription = weather[0].description;
    const weatherIcon = getWeatherIcon(weather[0].icon);
    const windSpeed = windToKmPerHour(wind.speed).toFixed(2);

    let currentWeatherContainer = document.querySelector(".current-weather");
    currentWeatherContainer.innerHTML =
      `
      <div class="px-3">
        <div class="fs-2 mb-2"><strong>${name}</strong></div>
        <div class="fs-4"><strong>${day}</strong>, ${time}</div>
        <div class="d-flex align-items-center justify-content-center">
          <strong class="fs-1">${temperature}°C</strong>
          <img src="${weatherIcon}" />
        </div>
      </div>
      <div class="px-3 mt-3" style="height: 192px">
        <p class="fs-5 mb-4">Se simt: <strong>${fellsLike}°C</strong></p>
        <p class="fs-5 text-capitalize mb-4">${weatherDescription}</p>
        <p class="fs-5">Vânt: <strong>${windSpeed} km/h</strong></p>
      </div>
        `;
    });
}



