import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row today">
        <div className="col-12">
          <span id="required-city">{props.city}</span>
        </div>
        <div className="col-6 current-city">
          <p>
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
            <br />
            <span id="description" className="text-capitalize">
              {props.data.description}
            </span>
          </p>
        </div>
        <div className="col-6 current-city current-date">
          <p>
            <span className="current-date">
              <FormattedDate date={props.data.date} />
            </span>
            <WeatherTemp temp={Math.round(props.data.currentTemp)} />
            <FormattedTime time={props.data.date} />
          </p>
        </div>
        <div className="col-6 weather-description">
          <p>
            Feels like:{" "}
            <span id="feels-like">{Math.round(props.data.feels_like)}</span>
            <span className="units"> °C</span>
            <br />
            Humidity: <span id="humidity">{props.data.humidity}</span>
            <span className="units"> %</span>
          </p>
        </div>
        <div className="col-6 pressure-wind weather-description">
          <p>
            Wind speed:{" "}
            <span id="wind-speed">{Math.round(props.data.wind)}</span>
            <span className="units"> m/s</span>
            <br />
            Pressure: <span id="pressure">{props.data.pressure}</span>
            <span className="units"> hPa</span>
          </p>
        </div>
      </div>
    </div>
  );
}
