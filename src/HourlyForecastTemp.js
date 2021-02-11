import React from "react";

export default function HourlzForecastTemp(props) {
  function temperature() {
    let temperature = Math.round(props.data.temp);
    return `${temperature}°C`;
  }
  return (
    <td className="hourly-forecast-data-temp">
      <span className="hourly-forecast-temp">{temperature()}</span>
    </td>
  );
}
