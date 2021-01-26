import React, { useState } from "react";
import axios from "axios";

export default function SearchForm() {
  const [city, setCity] = useState("");
  const [currentTemp, setCurrentTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [pressure, setPressure] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [description, setDescription] = useState("");
  const [currentIcon, setCurrentIcon] = useState("");
  const root = `https://api.openweathermap.org/`;
  const apiKey = `b81cb38c0b17e133191f4fac4a0b3833`;
  const oneCallApi = `data/2.5/onecall?`;
  const geoDirectApi = `geo/1.0/direct?`;
  const geoReverseApi = `geo/1.0/reverse?`;
  const units = `metric`;

  function updateWeather(queryParams) {
    let endPoint = `${root}${oneCallApi}${queryParams}&appid=${apiKey}&units=${units}`;
    axios.get(endPoint).then(function (response) {
      setCurrentTemp(response.data.current.temp);
      setHumidity(response.data.current.humidity);
      setFeelsLike(response.data.current.feels_like);
      setPressure(response.data.current.pressure);
      setWindSpeed(response.data.current.wind_speed);
      setDescription(response.data.current.weather[0].description);
      setCurrentIcon(response.data.current.weather[0].icon);
      document.getElementById("description").innerHTML = `${description}`;
      document.getElementById("current-temp").innerHTML = Math.round(
        currentTemp
      );
      document.getElementById("feels-like").innerHTML = Math.round(feelsLike);
      document.getElementById("humidity").innerHTML = `${humidity}`;
      document.getElementById("wind-speed").innerHTML = Math.round(windSpeed);
      document.getElementById("pressure").innerHTML = `${pressure}`;
      document
        .getElementById("current-icon-description")
        .setAttribute(
          `src`,
          `http://openweathermap.org/img/w/${currentIcon}.png`
        );

      document
        .querySelectorAll(".hourly-forecast-data")
        .forEach(function (element, index) {
          // let nextHours = new Date(
          //   (response.data.hourly[index].dt + 3600) * 1000
          // );
          // element.getElementsByClassName(
          //   "hourly-forecast-time"
          // ).innerHTML = formatTime(nextHours);
          element
            .querySelector(".hourly-forecast-icon")
            .setAttribute(
              `src`,
              `http://openweathermap.org/img/w/${response.data.hourly[index].weather[0].icon}.png`
            );
        });

      document
        .querySelectorAll(".hourly-forecast-data-temp")
        .forEach(function (element, index) {
          element.querySelector(".hourly-forecast-temp").innerHTML = Math.round(
            response.data.hourly[index].temp
          );
        });

      // document
      //   .getElementsByClassName(".col.forecast-date")
      //   .forEach(function (element, index) {
      //     let nextDays = new Date(response.data.daily[index].dt * 1000);
      //     element.querySelector(
      //       ".daily-forecast-date"
      //     ).innerHTML = formatDays(nextDays);
      //   });
      document
        .querySelectorAll(".col.date-weather")
        .forEach(function (element, index) {
          element
            .querySelector(".daily-forecast-icon")
            .setAttribute(
              `src`,
              `http://openweathermap.org/img/w/${response.data.daily[index].weather[0].icon}.png`
            );
          element.getElementsByClassName("temp_max").innerHTML = Math.round(
            response.data.daily[index].temp.max
          );
          element.getElementsByClassName("temp_min").innerHTML = Math.round(
            response.data.daily[index].temp.min
          );
        });
    });
  }

  function getCity(geoApiCallParams) {
    axios
      .get(`${root}${geoDirectApi}${geoApiCallParams}&limit=1&appid=${apiKey}`)
      .then(function (response) {
        document.getElementById(
          "required-city"
        ).innerHTML = `${response.data[0].name}, ${response.data[0].country}`;
        updateWeather(
          `lat=${response.data[0].lat}&lon=${response.data[0].lon}`
        );
      });
    axios
      .get(`${root}${geoReverseApi}${geoApiCallParams}&limit=1&appid=${apiKey}`)
      .then(function (response) {
        document.getElementById(
          "required-city"
        ).innerHTML = `${response.data[0].name}, ${response.data[0].country}`;
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      getCity(`q=${city}`);
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(function (position) {
      getCity(
        `lat=${position.coords.latitude}&lon=${position.coords.longitude}`
      );
      updateWeather(
        `lat=${position.coords.latitude}&lon=${position.coords.longitude}`
      );
    });
  }

  return (
    <div className="SearchForm">
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
    </div>
  );
}
