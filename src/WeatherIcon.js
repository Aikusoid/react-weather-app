import React from "react";

export default function WeatherIcon(props) {
  let codeMapping = {
    "01d": "svgs/day.svg",
    "01n": "svgs/night.svg",
    "02d": "svgs/cloudy-day-1.svg",
    "02n": "svgs/cloudy-night-1.svg",
    "03d": "svgs/cloudy.svg",
    "03n": "svgs/cloudy.svg",
    "04d": "svgs/cloudy.svg",
    "04n": "svgs/cloudy.svg",
    "09d": "svgs/rainy-3.svg",
    "09n": "svgs/rainy-4.svg",
    "10d": "svgs/rainy-2.svg",
    "10n": "svgs/rainy-6.svg",
    "11d": "svgs/thunder.svg",
    "11n": "svgs/thunder.svg",
    "13d": "svgs/snowy-3.svg",
    "13n": "svgs/snowy-6.svg",
    "50d": "svgs/cloudy.svg",
    "50n": "svgs/cloudy.svg",
  };

  return (
    <img
      className="WeatherIcon"
      src={codeMapping[props.code]}
      alt={props.alt}
    />
  );
}
