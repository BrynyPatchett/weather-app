export default  class dayWeather {
  constructor(date,
    avgTemperature,
    minTemperature,
    condition,
    chanceRain,
    percipitation,
    avghumidity
  ) {
    this.date = date;
    this.avgTemperature = avgTemperature;
    this.minTemperature = minTemperature;
    this.condition = condition;
    this.chanceRain = chanceRain;
    this.percipitation = percipitation;
    this.avghumidity = avghumidity;
  }
}
