import React from "react";
import DailyForecastItem from "./DailyForecastItem";

import "./DailyForecast.css";

export default function DailyForecast(props) {
  function formatDate(date) {
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

  return (
    <div className="DailyForecast">
      <div className="days">
        <DailyForecastItem
          fullDate={formatDate(
            new Date(props.data.forecast.daily[1].dt * 1000)
          )}
          tempMin={Math.round(props.data.forecast.daily[1].temp.min)}
          tempMax={Math.round(props.data.forecast.daily[1].temp.max)}
          icon={props.data.forecast.daily[1].weather[0].icon}
        />
      </div>
      <div className="days">
        <DailyForecastItem
          fullDate={formatDate(
            new Date(props.data.forecast.daily[2].dt * 1000)
          )}
          tempMin={Math.round(props.data.forecast.daily[2].temp.min)}
          tempMax={Math.round(props.data.forecast.daily[2].temp.max)}
          icon={props.data.forecast.daily[2].weather[0].icon}
        />
      </div>
      <div className="days">
        <DailyForecastItem
          fullDate={formatDate(
            new Date(props.data.forecast.daily[3].dt * 1000)
          )}
          tempMin={Math.round(props.data.forecast.daily[3].temp.min)}
          tempMax={Math.round(props.data.forecast.daily[3].temp.max)}
          icon={props.data.forecast.daily[3].weather[0].icon}
        />
      </div>
      <div className="days">
        <DailyForecastItem
          fullDate={formatDate(
            new Date(props.data.forecast.daily[4].dt * 1000)
          )}
          tempMin={Math.round(props.data.forecast.daily[4].temp.min)}
          tempMax={Math.round(props.data.forecast.daily[4].temp.max)}
          icon={props.data.forecast.daily[4].weather[0].icon}
        />
      </div>
      <div className="days">
        <DailyForecastItem
          fullDate={formatDate(
            new Date(props.data.forecast.daily[5].dt * 1000)
          )}
          tempMin={Math.round(props.data.forecast.daily[5].temp.min)}
          tempMax={Math.round(props.data.forecast.daily[5].temp.max)}
          icon={props.data.forecast.daily[5].weather[0].icon}
        />
      </div>
    </div>
  );
}
