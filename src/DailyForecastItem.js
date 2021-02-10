import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecastItem(props) {
  return (
    <div className="DailyForecastItem row daily-forecast">
      <div className="col forecast-date">
        <span className="daily-forecast-date">{props.fullDate}</span>
      </div>
      <div className="col date-weather">
        <WeatherIcon code={props.icon} />
        <div className="daily-forecast-temp">
          <span className="temp_max">{props.tempMax}</span>°C /{" "}
          <span className="temp_min">{props.tempMin}</span>°C
        </div>
      </div>
    </div>
  );
}
