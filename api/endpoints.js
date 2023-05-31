const myAPI = '11336f700480d6a9e8aa99804ade5a71';

function getCurrentWeatherEndPoint(city){
    return 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&lang=ro&units=metric&appid='+ myAPI;
}

function getForecastEndPoint(city){
    return 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&lang=ro&units=metric&appid='+ myAPI;
}
