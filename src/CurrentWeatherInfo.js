import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function CurrentWeatherInfo(props){
    return(
        <div className="CurrentWeatherInfo">
            <div className="row today">
                <div className="col-12">
                    <span id="required-city">{props.cityName.city}</span>
                </div>
                <div className="col-6 current-city">
                    <p>
                        <img
                            className="weather-icon"
                            src={props.data.iconUrl}
                            id="current-icon-description"
                            alt={props.data.description}
                        />
                        <br />
                        <span id="description" className="text-capitalize">{props.data.description}</span>
                    </p>
                </div>
                <div className="col-6 current-city current-date">
                    <p>
                        <span className="current-date">
                            <FormattedDate date={props.data.date}/>
                        </span>
                        <br />
                        <span className="current-temperature" id="current-temp">{Math.round(props.data.currentTemp)}</span>
                        <span className="units convert">
                            {" "}
                            <a href="/" id="celsius" className="active">
                            °C
                            </a>
                            |
                            <a href="/" id="fahrenheit">
                            °F
                            </a>
                        </span>
                        <br />
                        <FormattedTime time={props.data.date} />
                    </p>
                </div>
                <div className="col-6 weather-description">
                    <p>
                        Feels like: <span id="feels-like">{Math.round(props.data.feels_like)}</span>
                        <span className="units"> °C</span>
                        <br />
                        Humidity: <span id="humidity">{props.data.humidity}</span>
                        <span className="units"> %</span>
                    </p>
                </div>
                <div className="col-6 pressure-wind weather-description">
                    <p>
                        Wind speed: <span id="wind-speed">{Math.round(props.data.wind)}</span>
                        <span className="units"> m/sec</span>
                        <br />
                        Pressure: <span id="pressure">{props.data.pressure}</span>
                        <span className="units"> hPa</span>
                    </p>
                </div>
            </div>
        </div>
    );
}