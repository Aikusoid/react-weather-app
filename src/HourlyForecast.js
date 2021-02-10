import React from "react";
import HourlyForecastItem from "./HourlyForecastItem";
import HourlyForecastTemp from "./HourlyForecastTemp";

export default function HourlyForecast(props) {
  return (
    <div className="HourlyForecast">
      <div className="col-12">
        <table className="hourly-forecast">
          <thead className="hourly-forecast">
            <tr className="hourly-forecast">
              <HourlyForecastItem
                time={new Date(
                  props.data.forecast.hourly[1].dt * 1000
                ).getHours()}
                icon={props.data.forecast.hourly[1].weather[0].icon}
              />
              <HourlyForecastItem
                time={new Date(
                  props.data.forecast.hourly[2].dt * 1000
                ).getHours()}
                icon={props.data.forecast.hourly[2].weather[0].icon}
              />
              <HourlyForecastItem
                time={new Date(
                  props.data.forecast.hourly[3].dt * 1000
                ).getHours()}
                icon={props.data.forecast.hourly[3].weather[0].icon}
              />
              <HourlyForecastItem
                time={new Date(
                  props.data.forecast.hourly[4].dt * 1000
                ).getHours()}
                icon={props.data.forecast.hourly[4].weather[0].icon}
              />
              <HourlyForecastItem
                time={new Date(
                  props.data.forecast.hourly[5].dt * 1000
                ).getHours()}
                icon={props.data.forecast.hourly[5].weather[0].icon}
              />
            </tr>
          </thead>
          <tbody className="hourly-forecast">
            <tr className="hourly-forecast">
              <HourlyForecastTemp
                temp={Math.round(props.data.forecast.hourly[1].temp)}
              />
              <HourlyForecastTemp
                temp={Math.round(props.data.forecast.hourly[2].temp)}
              />
              <HourlyForecastTemp
                temp={Math.round(props.data.forecast.hourly[3].temp)}
              />
              <HourlyForecastTemp
                temp={Math.round(props.data.forecast.hourly[4].temp)}
              />
              <HourlyForecastTemp
                temp={Math.round(props.data.forecast.hourly[5].temp)}
              />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
