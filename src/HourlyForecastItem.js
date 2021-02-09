import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function HourlyForecastItem(props) {
  return (
    <th className="HourlyForecastItem hourly-forecast-data">
      <div className="hourly-forecast-time">{props.time}:00</div>
      <WeatherIcon code={props.icon} />
    </th>
  );
}
