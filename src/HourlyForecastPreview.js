import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function HourlyForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    return `${hours}:00`;
  }
  return (
    <th className="HourlyForecastPreview hourly-forecast-data">
      <div className="hourly-forecast-time">{hours()}</div>
      <WeatherIcon code={props.data.weather[0].icon} />
    </th>
  );
}
