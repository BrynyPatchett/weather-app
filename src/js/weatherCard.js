import sun from "../images/sun.png";
import rain from "../images/rain.png";
import cloud from "../images/cloud.png";
import storm from "../images/storm.png";
import  "../styles/weathercard.css";

export default function createWeatherCardElement(dayWeather,unit) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const conditionToWeatherImage = {
    "sun": sun,
    "cloud" : cloud,
    "rain" : rain,
    "storm":storm
  }

  let cardDate = new Date(dayWeather.date).getDay();

  let weatherCard = document.createElement("div");
  weatherCard.classList.add("weathercard");

  let weatherCardDateDiv = document.createElement("div");
  weatherCardDateDiv.classList.add("day");

  let weatherCardDateText = document.createElement("p");
  weatherCardDateText.textContent =daysOfWeek[cardDate];

  weatherCardDateDiv.appendChild(weatherCardDateText);
  weatherCard.appendChild(weatherCardDateDiv);

  let weatherInfo = document.createElement("div");
  weatherInfo.classList.add("weatherinfo");

  //use condition to set class which sets animation
  weatherCard.classList.add(dayWeather.condition);
  let weatherImg = document.createElement("img");
   //use condition to look into table/object  of images
  weatherImg.src = conditionToWeatherImage[dayWeather.condition];
  weatherImg.alt = dayWeather.condition;
  weatherInfo.appendChild(weatherImg);

  let tempDiv = document.createElement("div");
  tempDiv.classList.add("temp");

  let tempHigh = document.createElement("p");
  tempHigh.classList.add("temperatureHigh");
  tempHigh.textContent = dayWeather.avgTemperature[unit] + " °" + unit;

  let tempLow = document.createElement("p");
  tempLow.classList.add("temperatureLow");
  tempLow.textContent = dayWeather.minTemperature[unit] +  " °" + unit;

  tempDiv.appendChild(tempHigh);
  tempDiv.appendChild(tempLow);
  weatherInfo.appendChild(tempDiv);

  let chanceWrapper = document.createElement("div");
  chanceWrapper.classList.add("chanceWrapper");

  let chanceInfo = document.createElement("div");
  chanceInfo.classList.add("chanceinfo");

  let chanceDivRain = document.createElement("div");
  chanceDivRain.classList.add("chance");

  let chanceDivPercep = document.createElement("div");
  chanceDivPercep.classList.add("chance");

  let chanceDivHumid = document.createElement("div");
  chanceDivHumid.classList.add("chance");

  let chanceRainP = document.createElement("p");
  chanceRainP.textContent = "Chance of Rain";

  let chanceRainPValue = document.createElement("p");
  chanceRainPValue.textContent = dayWeather.chanceRain + "%";

  chanceDivRain.appendChild(chanceRainP);
  chanceDivRain.appendChild(chanceRainPValue);
  chanceInfo.appendChild(chanceDivRain);

  let chancePercepP = document.createElement("p");
  chancePercepP.textContent = "Precipitation";

  let chancePercepPValue = document.createElement("p");
  chancePercepPValue.textContent = dayWeather.percipitation + "mm";

  chanceDivPercep.appendChild(chancePercepP);
  chanceDivPercep.appendChild(chancePercepPValue);
  chanceInfo.appendChild(chanceDivPercep);

  let chanceHumidP = document.createElement("p");
  chanceHumidP.textContent = "Humidity";

  let chanceHumidPValue = document.createElement("p");
  chanceHumidPValue.textContent = dayWeather.avghumidity + "%";

  chanceDivHumid.appendChild(chanceHumidP);
  chanceDivHumid.appendChild(chanceHumidPValue);
  chanceInfo.appendChild(chanceDivHumid);

  chanceWrapper.appendChild(chanceInfo);

  weatherInfo.appendChild(chanceWrapper);
  weatherCard.appendChild(weatherInfo);

  return weatherCard;
}

