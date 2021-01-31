import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";


export default function Weather(){
  const[weatherData, setWeatherData]=useState({ready: false});

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
    });
  }
if (weatherData.ready) {
   return(
        <div className="Weather">
        <form id="search-city">
        <label id="weather-in">Weather in </label>
        <input
          type="search"
          className="form-control form-control-sm"
          placeholder="Enter city"
          id="city-input"
          autoComplete="on"
          autoFocus="on"
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
            <div className="row today">
              <div className="col-12">
                <span id="required-city"></span>
              </div>
              <div className="col-6 current-city">
                <p>
                  <img
                    className="weather-icon"
                    src={weatherData.iconUrl}
                    id="current-icon-description"
                    alt={weatherData.description}
                  />
                  <br />
                  <span id="description" className="text-capitalize">{weatherData.description}</span>
                </p>
              </div>
              <div className="col-6 current-city current-date">
                <p>
                  <span className="current-date">
                    <FormattedDate date={weatherData.date}/>
                  </span>
                  <br />
                  <span className="current-temperature" id="current-temp">{Math.round(weatherData.currentTemp)}</span>
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
                  <FormattedTime time={weatherData.date} />
                </p>
              </div>
              <div className="col-6 weather-description">
                <p>
                  Feels like: <span id="feels-like">{Math.round(weatherData.feels_like)}</span>
                  <span className="units"> °C</span>
                  <br />
                  Humidity: <span id="humidity">{weatherData.humidity}</span>
                  <span className="units"> %</span>
                </p>
              </div>
              <div className="col-6 pressure-wind weather-description">
                <p>
                  Wind speed: <span id="wind-speed">{Math.round(weatherData.wind)}</span>
                  <span className="units"> m/sec</span>
                  <br />
                  Pressure: <span id="pressure">{weatherData.pressure}</span>
                  <span className="units"> hPa</span>
                </p>
              </div>
            </div>
            <div className="col-12">
              <table className="hourly-forecast">
                <thead className="hourly-forecast">
                  <tr className="hourly-forecast">
                    <th className="hourly-forecast-data">
                      <div className="hourly-forecast-time">16:00</div>
                      <img
                        className="hourly-forecast-icon"
                        src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png"
                        alt=""
                      />
                    </th>
                    <th className="hourly-forecast-data">
                      <div className="hourly-forecast-time">17:00</div>
                      <img
                        className="hourly-forecast-icon"
                        src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png"
                        alt=""
                      />
                    </th>
                    <th className="hourly-forecast-data">
                      <div className="hourly-forecast-time">18:00</div>
                      <img
                        className="hourly-forecast-icon"
                        src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png"
                        alt=""
                      />
                    </th>
                    <th className="hourly-forecast-data">
                      <div className="hourly-forecast-time">19:00</div>
                      <img
                        className="hourly-forecast-icon"
                        src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png"
                        alt=""
                      />
                    </th>
                    <th className="hourly-forecast-data">
                      <div className="hourly-forecast-time">20:00</div>
                      <img
                        className="hourly-forecast-icon"
                        src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png"
                        alt=""
                      />
                    </th>
                  </tr>
                </thead>
                <tbody className="hourly-forecast">
                  <tr className="hourly-forecast">
                    <td className="hourly-forecast-data-temp">
                      <span className="hourly-forecast-temp">-3</span>
                      °C
                    </td>
                    <td className="hourly-forecast-data-temp">
                      <span className="hourly-forecast-temp">-2</span> °C
                    </td>
                    <td className="hourly-forecast-data-temp">
                      <span className="hourly-forecast-temp">-3</span> °C
                    </td>
                    <td className="hourly-forecast-data-temp">
                      <span className="hourly-forecast-temp">-3</span> °C
                    </td>
                    <td className="hourly-forecast-data-temp">
                      <span className="hourly-forecast-temp">-5</span> °C
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col daily-forecast">
            <div className="days">
              <div className="row daily-forecast">
                <div className="col forecast-date">
                  <span className="daily-forecast-date">Sun. 17/01</span>
                </div>
                <div className="col date-weather">
                  <img
                    className="daily-forecast-icon"
                    src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png"
                    alt=""
                  />
                  <div className="daily-forecast-temp">
                    <span className="temp_max">-1</span>°C /{" "}
                    <span className="temp_min">-6</span>°C
                  </div>
                </div>
              </div>
            </div>
            <div className="days">
              <div className="row daily-forecast">
                <div className="col forecast-date">
                  <span className="daily-forecast-date">Sun. 17/01</span>
                </div>
                <div className="col date-weather">
                  <img
                    className="daily-forecast-icon"
                    src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png"
                    alt=""
                  />
                  <div className="daily-forecast-temp">
                    <span className="temp_max">-1</span>°C /{" "}
                    <span className="temp_min">-6</span>°C
                  </div>
                </div>
              </div>
            </div>
            <div className="days">
              <div className="row daily-forecast">
                <div className="col forecast-date">
                  <span className="daily-forecast-date">Sun. 17/01</span>
                </div>
                <div className="col date-weather">
                  <img
                    className="daily-forecast-icon"
                    src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png"
                    alt=""
                  />
                  <div className="daily-forecast-temp">
                    <span className="temp_max">-1</span>°C /{" "}
                    <span className="temp_min">-6</span>°C
                  </div>
                </div>
              </div>
            </div>
            <div className="days">
              <div className="row daily-forecast">
                <div className="col forecast-date">
                  <span className="daily-forecast-date">Sun. 17/01</span>
                </div>
                <div className="col date-weather">
                  <img
                    className="daily-forecast-icon"
                    src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png"
                    alt=""
                  />
                  <div className="daily-forecast-temp">
                    <span className="temp_max">-1</span>°C /{" "}
                    <span className="temp_min">-6</span>°C
                  </div>
                </div>
              </div>
            </div>
            <div className="days">
              <div className="row daily-forecast">
                <div className="col forecast-date">
                  <span className="daily-forecast-date">Sun. 17/01</span>
                </div>
                <div className="col date-weather">
                  <img
                    className="daily-forecast-icon"
                    src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png"
                    alt=""
                  />
                  <div className="daily-forecast-temp">
                    <span className="temp_max">-1</span>°C /{" "}
                    <span className="temp_min">-6</span>°C
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row sun-position">
          <div className="col-12 sun-img">
            <img
              className="sun-position"
              src="https://www.suntoday.org/images/sunrise-sunset.png"
              alt=""
            />
          </div>
          <div className="col-6 sunrise">
            <span id="sunrise-time">08:00</span>
          </div>
          <div className="col-6 sunset">
            <span id="sunset-time">17:00</span>
          </div>
        </div>
      </div>
    );
} else {
  const apiKey = `b81cb38c0b17e133191f4fac4a0b3833`;
  let endPoint =`https://api.openweathermap.org/data/2.5/onecall?lat=50.073658&lon=14.418540&appid=${apiKey}&units=metric`;
  axios.get(endPoint).then(handleResponse);

  return "Loading...";
}

  
   
}