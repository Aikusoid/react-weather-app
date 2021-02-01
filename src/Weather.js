import React, { useState } from "react";
import axios from "axios";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import SunriseSunset from "./SunriseSunset";

export default function Weather(props){
  const[city, setCity]=useState(props.defaultCity);
  const[weatherData, setWeatherData]=useState({ready:false});

  const apiKey=`b81cb38c0b17e133191f4fac4a0b3833`;
  const root =`http://api.openweathermap.org`;
  let units=`metric`;

  function handleResponse(response){
    setWeatherData({
      ready: true,
      city: `${response.data.name}, ${response.data.sys.country}`,
      currentTemp: response.data.main.temp,
      feels_like: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pressure: response.data.main.pressure,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt*1000),
    })
  }

  function searchCity(){
    let endPoint=`${root}/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(endPoint).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
   searchCity();
  }

  function updateCity(event){
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return(
      <div className="Weather">
          <form id="search-city" onSubmit={handleSubmit}>
            <label id="weather-in">Weather in </label>
            <input
              type="search"
              className="form-control form-control-sm"
              placeholder="Enter city"
              id="city-input"
              autoComplete="on"
              autoFocus="on"
              onChange={updateCity}
            />
            <input
              type="submit"
              className="btn btn-primary btn-sm"
              value="Search"
              id="search-submit"
            />
          </form>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            id="current-location"
          >
            Current
          </button>
          <div className="row weather-forecast-info">
            <div className="col today">
              <CurrentWeatherInfo data={weatherData} />
              <HourlyForecast />
            </div>
            <div className="col daily-forecast">
              <DailyForecast />
            </div>
          </div>
          <SunriseSunset />
        </div>
      );
  } else {
      searchCity();
      return "Loading..."
  }   
}