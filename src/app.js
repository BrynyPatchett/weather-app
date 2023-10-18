import dayWeather from "./js/dayweather";
import weatherCard from "./js/weatherCard"
import './styles/style.css';
import  spinnerIcon from './images/loading.svg';

let currentUnit = "C";
const search = document.querySelector("#searchbar");
const searchButton = document.querySelector(".searchicon");
const weatherCardsDisplay = document.querySelector(".weathercards");
const weatherContent = document.querySelector(".weathercontent");
const currentLocation = document.querySelector("#currentLocation");
const errorMessage= document.querySelector(".errormessage");
const regex = /^([A-Za-z](-?|,?\s?))+$/;
const WEATHER_API_KEY = "2dc0747a20414ce69b1212419231010";
const unit= document.querySelector("#unit");
let currentWeatherDays = [];

unit.addEventListener("click",function(e){
  e.stopPropagation();
  if(unit.checked == true){
    currentUnit = "F";
  }else{
    currentUnit = "C";
  }
  if(currentWeatherDays.length > 0){

    let day = 0;
    weatherContent.querySelectorAll(".weathercard").forEach((card) => {
      card.querySelector(".temperatureHigh").textContent = currentWeatherDays[day].avgTemperature[currentUnit] + " °" + currentUnit;
      card.querySelector(".temperatureLow").textContent = currentWeatherDays[day].minTemperature[currentUnit] + " °" + currentUnit;
      day++;
    });

  }

})


 
search.oninput = validateSearch

searchButton.addEventListener("click",  async function (e) {
  let searchLocation = search.value;
  //do validation
    if(validateSearch(search.value)){
      currentWeatherDays =  await getWeatherDayFromLocation(search.value);
      console.log(currentWeatherDays);
    }
});

async function getWeatherDayFromLocation(location) {
 
  showLoading();

  try {
    let response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?q=${location}&key=2dc0747a20414ce69b1212419231010&days=3`
    );
    let data = await response.json();
    let displayLocation = `${data.location.name}, ${data.location.country}`;
    currentLocation.textContent = displayLocation;
    let weatherDays = [];
    data.forecast.forecastday.forEach((dayforecast) => {

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
      weatherDays.push(
        new dayWeather(
          dayforecast.date,
          { C: Math.trunc(dayforecast.day.maxtemp_c), F: Math.trunc(dayforecast.day.maxtemp_f) },
          { C: Math.trunc(dayforecast.day.mintemp_c), F: Math.trunc(dayforecast.day.mintemp_f) },
          condition,
          dayforecast.day.daily_chance_of_rain,
          dayforecast.day.totalprecip_mm,
          dayforecast.day.avghumidity
        )
      );
    });
      removeLoading();
      weatherDays.forEach(day=>{
        weatherCardsDisplay.appendChild(weatherCard(day,currentUnit));
      })


     return weatherDays;
  } catch (e) {
    removeLoading();
    weatherContent.style.display = "none";
    currentLocation.textContent = "Please Enter a Valid Location";
    errorMessage.style.display = "block";
    search.classList.add("error");
  }
}


function showLoading(){
  let loader = document.createElement('div');
  loader.classList.add("loader");
  let loadingIcon = document.createElement('img');
  loadingIcon.classList.add("spinner");
  loadingIcon.src = spinnerIcon;
  loader.appendChild(loadingIcon);


  if(weatherContent.style.display === "none" || weatherContent.style.display === ""){
    weatherCardsDisplay.style.display = "flex";
    weatherContent.style.display = "flex";
    weatherCardsDisplay.appendChild(loader);
  }else{
    weatherContent.querySelectorAll(".weathercard").forEach(card =>{
      //remove all animations from display cards
      let cardAnimClass = card.classList[card.classList.length -1];
      card.classList.remove(cardAnimClass);
      //remove all children of cards
      while(card.firstChild){
        card.removeChild(card.firstChild)
      }
      card.appendChild(loader.cloneNode(true));
    });

  }

}

function removeLoading(){
  document.querySelectorAll(".loader").forEach(l => l.remove());
  //removes card displaying loading if there are any
  weatherContent.querySelectorAll(".weathercard").forEach(card => card.remove());

}

function validateSearch(){
  let term = search.value;
  if (term.length === 0 || !regex.test(term)){
    errorMessage.style.display = "block";
    search.classList.add("error");
    return false;

  }else{
    errorMessage.style.display = "none";
    search.classList.remove("error");
    return true;
  }
}