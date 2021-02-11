import React from "react";
import DailyForecastPreview from "./DailyForecastPreview";

import "./DailyForecast.css";

export default function DailyForecast(props) {
  return (
    <div className="DailyForecast">
      {props.data.forecast.daily.slice(1, 6).map(function (dailyForecastItem) {
        return <DailyForecastPreview data={dailyForecastItem} />;
      })}
    </div>
  );
}
