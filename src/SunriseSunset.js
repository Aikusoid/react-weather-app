import React from "react";

import "./SunriseSunset.css";

export default function SunriseSunset(props) {
  function formatedTime(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }

    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${hours}:${minutes}`;
  }
  return (
    <div className="SunriseSunset">
      <div className="row sun-position">
        <div className="col-12 sun-img">
          <img src="svgs/sunrise-sunset.png" alt="sunrise-sunset" />
        </div>
        <div className="col-6 sunrise">
          <span id="sunrise-time">{formatedTime(props.data.sunrise)}</span>
        </div>
        <div className="col-6 sunset">
          <span id="sunset-time">{formatedTime(props.data.sunset)}</span>
        </div>
      </div>
    </div>
  );
}
