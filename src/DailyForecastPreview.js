import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecastPreview(props) {
  function formatDate() {
    let date = new Date(props.data.dt * 1000);
    let weekDays = [`Sun.`, `Mon.`, `Tue.`, `Wed.`, `Thu.`, `Fri.`, `Sat.`];
    let weekDay = weekDays[date.getDay()];

    let day = date.getDate();

    let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let month = months[date.getMonth()];
    if (month < 10) {
      month = `0${month}`;
    }
    return `${weekDay} ${day}/${month}`;
  }

  function tempMax() {
    let temperatureMax = Math.round(props.data.temp.max);
    return `${temperatureMax}°C`;
  }

  function tempMin() {
    let temperatureMin = Math.round(props.data.temp.min);
    return `${temperatureMin}°C`;
  }
  return (
    <div className="DailyForecastPreview days">
      <div className=" row daily-forecast">
        <div className="col forecast-date">
          <span className="daily-forecast-date">{formatDate()}</span>
        </div>
        <div className="col date-weather">
          <WeatherIcon code={props.data.weather[0].icon} />
          <div className="daily-forecast-temp">
            <span className="temp_max">{tempMax()}</span> |{" "}
            <span className="temp_min">{tempMin()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
