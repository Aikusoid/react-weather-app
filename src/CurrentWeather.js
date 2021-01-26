import React from "react";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="row today">
        <div className="col-12">
          <span id="required-city"></span>
        </div>
        <div className="col-6 current-city">
          <p>
            <img
              className="weather-icon"
              src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
              id="current-icon-description"
              alt=""
            />
            <br />
            <span id="description"></span>
          </p>
        </div>
        <div className="col-6 current-city current-date">
          <p>
            <span className="current-date">16/01/2021</span>
            <br />
            <span className="current-temperature" id="current-temp"></span>
            <span className="units convert">
              {" "}
              <a href="/" id="celsius" className="active">
                °C
              </a>
              |
              <a href="/" id="fahrenheit">
                °F
              </a>
            </span>
            <br />
            <span className="current-time">15:30</span>
          </p>
        </div>
        <div className="col-6 weather-description">
          <p>
            Feels like: <span id="feels-like"></span>
            <span className="units"> °C</span>
            <br />
            Humidity: <span id="humidity">90</span>
            <span className="units"> %</span>
          </p>
        </div>
        <div className="col-6 pressure-wind weather-description">
          <p>
            Wind speed: <span id="wind-speed">2</span>
            <span className="units"> m/sec</span>
            <br />
            Pressure: <span id="pressure">967</span>
            <span className="units"> hPa</span>
          </p>
        </div>
      </div>
    </div>
  );
}
