function getDayOfTheWeek(utc){
    const date = new Date(utc * 1000);
    const day = date.getDay();
    let weekDay;

    switch (day) {
        case 0:
          weekDay = "Duminică";
          break;
        case 1:
          weekDay = "Luni";
          break;
        case 2:
          weekDay = "Marți";
          break;
        case 3:
          weekDay = "Miercuri";
          break;
        case 4:
          weekDay = "Joi";
          break;
        case 5:
          weekDay = "Vineri";
          break;
        case 6:
          weekDay = "Sâmbătă";
          break;
        default:
          alert('Eroare');
      }

    return weekDay;
    
}

function getHour(utc){
    const date = new Date(utc * 1000);
    let hours = date.getHours();
    if (hours < 10) {
      hours = "0" + hours;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return `${hours}:${minutes}`;
}




