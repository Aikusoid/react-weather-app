import React from "react";

export default function HourlzForecastTemp(props) {
  return (
    <td className="hourly-forecast-data-temp">
      <span className="hourly-forecast-temp">{props.temp}</span>
      °C
    </td>
  );
}
