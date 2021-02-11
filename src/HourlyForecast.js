import React from "react";
import HourlyForecastPreview from "./HourlyForecastPreview";
import HourlyForecastTemp from "./HourlyForecastTemp";

import "./HourlyForecast.css";

export default function HourlyForecast(props) {
  return (
    <div className="HourlyForecast">
      <div className="col-12">
        <table className="hourly-forecast">
          <thead className="hourly-forecast">
            <tr className="hourly-forecast">
              {props.data.forecast.hourly
                .slice(1, 6)
                .map(function (hourlyForecastItem) {
                  return <HourlyForecastPreview data={hourlyForecastItem} />;
                })}
            </tr>
          </thead>
          <tbody className="hourly-forecast">
            <tr className="hourly-forecast">
              {props.data.forecast.hourly
                .slice(1, 6)
                .map(function (hourlyForecastItem) {
                  return <HourlyForecastTemp data={hourlyForecastItem} />;
                })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
