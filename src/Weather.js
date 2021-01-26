import React from "react";
import SearchForm from "./SearchForm";
import DailyForecast from "./DailyForecast";

export default function Weather(){
    return(
        <div className="Weather">
        <SearchForm />
        <div className="row weather-forecast-info">
          <div className="col today">
            <CurrentWeather />
            <HourlyForecast />
          </div>
          <div className="col daily-forecast">
            <DailyForecast />
            <DailyForecast />
            <DailyForecast />
            <DailyForecast />
            <DailyForecast />
          </div>
        </div>
        <div className="row sun-position">
          <div className="col-12 sun-img">
            <img
              className="sun-position"
              src="https://www.suntoday.org/images/sunrise-sunset.png"
              alt=""
            />
          </div>
          <div className="col-6 sunrise">
            <span id="sunrise-time">08:00</span>
          </div>
          <div className="col-6 sunset">
            <span id="sunset-time">17:00</span>
          </div>
        </div>
      </div>
    );
}