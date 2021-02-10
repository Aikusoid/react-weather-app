import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function HourlyForecastItem(props) {
  if (props.time < 10) {
    return (
      <th className="HourlyForecastItem hourly-forecast-data">
        <div className="hourly-forecast-time">0{props.time}:00</div>
        <WeatherIcon code={props.icon} />
      </th>
    );
  } else {
    return (
      <th className="HourlyForecastItem hourly-forecast-data">
        <div className="hourly-forecast-time">{props.time}:00</div>
        <WeatherIcon code={props.icon} />
      </th>
    );
  }
}
