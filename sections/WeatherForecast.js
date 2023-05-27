function displayWeatherForecast(city) {

const forecastEndpoint = getForecastEndPoint(city);
  
let weatherForecastContainer = document.querySelector(".weather-forecast");
weatherForecastContainer.innerHTML = "";
  
fetch(forecastEndpoint)
.then((response) => response.json())
.then((data) => {

    const { list } = data;
    const daysMap = {};
  
    // Iteram prin cele 40 de predictii primite de la server.
    list.forEach((element) => {
        const { dt } = element;
        const day = getDayOfTheWeek(dt);
        // Daca deja avem ziua saptamanii in obiect, ii aduagam o noua predictie.
        if (daysMap[day]) {
            daysMap[day].push(element);
        // Altfel, adaugam ziua saptamanii in obiect, alaturi de noua predictie.
        } else {
            daysMap[day] = [element];
        }
    });
  
    for (key in daysMap) {

     // Afisam ziua saptamanii pe ecran.
    weatherForecastContainer.innerHTML += `<h3 class="text-primary">${key}</h3>`;

    // Pentru fiecare zi a saptamanii, extragem predictiile asociate si iteram prin ele.
    days = daysMap[key];
    days.forEach((element) => {
        // Pentru fiecare element (predictie), extragem datele de interes.
        const { dt, main, weather } = element;
        const hour = getHour(dt);
        const temperature = Math.round(main.temp);
        const feelsLike = Math.round(main.feels_like);
        const weatherDescription = weather[0].description;
        const weatherIcon = getWeatherIcon(weather[0].icon);

        weatherForecastContainer.innerHTML += `
            <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
                <div>${hour}</div>
                <div><img src="${weatherIcon}" alt="" /></div>
                <div class="fs-3"><strong>${temperature}°C</strong></div>
                <div class="text-center" style="width: 120px">${weatherDescription}</div>
                <div class="real-feel">Se simt: <strong>${feelsLike}°C</strong></div>
            </div>
            `;
          });
        }
      });
  }
