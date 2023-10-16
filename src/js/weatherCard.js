import sun from "../images/sun.png";
import rain from "../images/rain.png";
import cloud from "../images/cloud.png";
import storm from "../images/storm.png";

export default function createWeatherCardElement(dayWeather) {
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

//   const today = new Date().getDay();
  let cardDate = new Date(dayWeather.date).getDay();
//   let displayDate = cardDate === today ? "Today" : daysOfWeek[cardDate];

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
  tempHigh.textContent = dayWeather.avgTemperature.c;

  let tempLow = document.createElement("p");
  tempLow.classList.add("temperatureLow");
  tempLow.textContent = dayWeather.minTemperature.c;

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

//      <div class="weathercard sun">
//     <div class="day"><p>Saturday</p></div>
//     <div class="weatherinfo">
//       <img src="./src/sun.png" alt="cloudy" />
//       <div  class="temp">
//         <p class="temperatureHigh">16c</p>
//         <p class="temperatureLow">8c</p>
//       </div>
//       <div class="chanceWrapper">
//         <div class="chanceinfo">
//           <div class="chance"><p>Chance of Rain</p><p>82%</p></div>
//           <div class="chance"><p>PRECIPITATION</p><p>11.4cm</p></div>
//           <div class="chance"><p>Humidity</p><p>94%</p></div>
//         </div>
//       </div>
//     </div>
//   </div>
