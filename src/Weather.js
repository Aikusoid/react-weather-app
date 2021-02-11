import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Loader from "react-loader-spinner";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import SunriseSunset from "./SunriseSunset";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [requiredCity, setRequiredCity] = useState(null);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const apiKey = `b81cb38c0b17e133191f4fac4a0b3833`;
  const root = `https://api.openweathermap.org`;

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      currentTemp: response.data.current.temp,
      feels_like: response.data.current.feels_like,
      humidity: response.data.current.humidity,
      wind: response.data.current.wind_speed,
      pressure: response.data.current.pressure,
      description: response.data.current.weather[0].description,
      icon: response.data.current.weather[0].icon,
      date: new Date(response.data.current.dt * 1000),
      forecast: response.data,
    });
  }

  function getCoords(response) {
    let endPointByCity = `${root}/data/2.5/onecall?lat=${response.data[0].lat}&lon=${response.data[0].lon}&appid=${apiKey}&units=metric`;
    axios.get(endPointByCity).then(handleResponse);
    setRequiredCity(`${response.data[0].name}, ${response.data[0].country}`);
  }

  function search() {
    let geoDirectApiUrl = `${root}/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
    axios.get(geoDirectApiUrl).then(getCoords);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function getCurrentLocation(position) {
    let geoReverseApiUrl = `${root}/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=1&appid=${apiKey}`;
    axios.get(geoReverseApiUrl).then(function (response) {
      setRequiredCity(`${response.data[0].name}, ${response.data[0].country}`);
    });

    let endPointByLoc = `${root}/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(endPointByLoc).then(handleResponse);
  }

  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getCurrentLocation);
  }

  if (weatherData.ready) {
    return (
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
          onClick={getLocation}
        >
          Current
        </button>
        <div className="row weather-forecast-info">
          <div className="col today">
            <WeatherInfo data={weatherData} city={requiredCity} />
            <HourlyForecast data={weatherData} />
          </div>
          <div className="col daily-forecast">
            <DailyForecast data={weatherData} />
          </div>
        </div>
        <SunriseSunset />
      </div>
    );
  } else {
    function getCurrentLocation(position) {
      let geoReverseApiUrl = `${root}/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=1&appid=${apiKey}`;
      axios.get(geoReverseApiUrl).then(function (response) {
        setRequiredCity(
          `${response.data[0].name}, ${response.data[0].country}`
        );
      });

      let endPointByLoc = `${root}/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
      axios.get(endPointByLoc).then(handleResponse);
    }

    function getMyLocation() {
      navigator.geolocation.getCurrentPosition(getCurrentLocation);
    }
    getMyLocation();
    return (
      <Loader
        type="Puff"
        color="#white"
        height={100}
        width={100}
        timeout={3000}
      />
    );
  }
}
