const myAPI = 'c50768732c26a7606c57438beb12b595';

function getCurrentWeatherEndPoint(city){
    return 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&lang=ro&units=metric&appid='+ myAPI;
}

function getForecastEndPoint(city){
    return 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&lang=ro&units=metric&appid='+ myAPI;
}
