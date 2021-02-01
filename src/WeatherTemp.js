import React, { useState } from "react";

export default function WeatherTemp(props){
    const[unit, setUnit]=useState("celsius");

    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertToCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit(){
        return (props.temp*1.8)+32;
    }

    if (unit === "celsius") {
        return(
            <div className="WeatherTemp">
                <span className="current-temperature" id="current-temp">{props.temp}</span>
                <span className="units convert">°C | <a href="/" id="fahrenheit" onClick={convertToFahrenheit}>°F</a></span>
            </div>
        );
    } else {
        return (
            <div className="WeatherTemp">
                <span className="current-temperature" id="current-temp">{Math.round(fahrenheit())}</span>
                <span className="units convert"><a href="/" id="celsius" onClick={convertToCelsius}>°C</a>  |  °F</span>
            </div>
        );
    };
}