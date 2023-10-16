import dayWeather from "./js/dayweather";
import weatherCard from "./js/weatherCard"
import './styles/style.css';

console.log("Test");

const search = document.querySelector("#searchbar");
const searchButton = document.querySelector(".searchicon");
const weatherCardsDisplay = document.querySelector(".weathercards");

const WEATHER_API_KEY = "2dc0747a20414ce69b1212419231010";

searchButton.addEventListener("click",  function (e) {
  console.log(search.value);
  //do validation
   getWeatherDayFromLocation(search.value);
  console.log("HELLO AFTER TIMEOUT");
});

async function getWeatherDayFromLocation(location) {
  await console.log("searhcing for location");
  try {
    let response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?q=${location}&key=2dc0747a20414ce69b1212419231010&days=3`
    );
    let data = await response.json();
    let weatherDays = [];
    data.forecast.forecastday.forEach((dayforecast) => {
      console.log(dayforecast);

      //decide on conditions using returned code from https://www.weatherapi.com/docs/#weather-icons
      let code = dayforecast.day.condition.code;
      let condition;
      if(code === 1000){
        condition = 'sun';
      }
      else if(code >= 1063 && code <= 1072 || code >= 1150 && code <= 1264 ){
        condition = 'rain';
      }
      else if(code >= 1273 && code <= 1282){
        condition = 'storm';
      }
      else{
        condition = 'cloud';
      }
      console.log(code);
      console.log(dayforecast.day.condition.text);
      console.log(condition);
      weatherDays.push(
        new dayWeather(
          dayforecast.date,
          { c: Math.trunc(dayforecast.day.maxtemp_c), f: Math.trunc(dayforecast.day.maxtemp_f) },
          { c: Math.trunc(dayforecast.day.mintemp_c), f: Math.trunc(dayforecast.day.mintemp_f) },
          condition,
          dayforecast.day.daily_chance_of_rain,
          dayforecast.day.totalprecip_mm,
          dayforecast.day.avghumidity
        )
      );
    });
      console.log(weatherDays);

      weatherDays.forEach(day=>{
        weatherCardsDisplay.appendChild(weatherCard(day));
      })


     return weatherDays;
  } catch (e) {
    alert(e);
  }
}
