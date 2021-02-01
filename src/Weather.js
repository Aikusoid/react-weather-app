import React, { useState } from "react";
import axios from "axios";
import CurrentWeatherInfo from "./CurrentWeatherInfo";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import SunriseSunset from "./SunriseSunset";

export default function Weather(props){
  const[city, setCity]=useState("Prague");
  const[weatherData, setWeatherData]=useState({ready:false});

  const apiKey=`b81cb38c0b17e133191f4fac4a0b3833`;
  const root =`http://api.openweathermap.org`;
  let units=`metric`;

  function handleResponse(response){
    setWeatherData({
      ready: true,
      currentTemp: response.data.current.temp,
      feels_like: response.data.current.feels_like,
      humidity: response.data.current.humidity,
      wind: response.data.current.wind_speed,
      pressure: response.data.current.pressure,
      description: response.data.current.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
      date: new Date(response.data.current.dt*1000),
    })
  }

  function searchCity(apiCallParams){
    let endPoint=`${root}/data/2.5/onecall?${apiCallParams}&appid=${apiKey}&units=${units}`;
    axios.get(endPoint).then(handleResponse);
  }

  function geoCoding(queryParams){
    let endPointDirect=`${root}geo/1.0/direct?${queryParams}&limit=1&appid=${apiKey}`;
    axios.get(endPointDirect).then(function(response){
      searchCity(`lat=${response.data[0].lat}&lon=${response.data[0].lon}`)
    })
  }

  function getCurrentLocation(event){
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(function(position){
      searchCity(`lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
    });
  }

  function handleSubmit(event){
    event.preventDefault();
    geoCoding(`q=${city}`);
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
            onClick={getCurrentLocation}
          >
            Current
          </button>
          <div className="row weather-forecast-info">
            <div className="col today">
              <CurrentWeatherInfo data={weatherData} cityName={city} />
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
      searchCity(`lat=50.08804&lon=14.42076`);
      return "Loading..."
  }   
}