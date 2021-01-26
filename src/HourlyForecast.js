import React from "react";

export default function HourlyForecast() {
  return (
    <div className="HourlyForecast">
      <div className="col-12">
        <table className="hourly-forecast">
          <thead className="hourly-forecast">
            <tr className="hourly-forecast">
              <th className="hourly-forecast-data">
                <div className="hourly-forecast-time">16:00</div>
                <img
                  className="hourly-forecast-icon"
                  src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png"
                  alt=""
                />
              </th>
              <th className="hourly-forecast-data">
                <div className="hourly-forecast-time">17:00</div>
                <img
                  className="hourly-forecast-icon"
                  src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png"
                  alt=""
                />
              </th>
              <th className="hourly-forecast-data">
                <div className="hourly-forecast-time">18:00</div>
                <img
                  className="hourly-forecast-icon"
                  src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png"
                  alt=""
                />
              </th>
              <th className="hourly-forecast-data">
                <div className="hourly-forecast-time">19:00</div>
                <img
                  className="hourly-forecast-icon"
                  src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png"
                  alt=""
                />
              </th>
              <th className="hourly-forecast-data">
                <div className="hourly-forecast-time">20:00</div>
                <img
                  className="hourly-forecast-icon"
                  src="https://ssl.gstatic.com/onebox/weather/48/snow_light.png"
                  alt=""
                />
              </th>
            </tr>
          </thead>
          <tbody className="hourly-forecast">
            <tr className="hourly-forecast">
              <td className="hourly-forecast-data-temp">
                <span className="hourly-forecast-temp">-3</span>
                °C
              </td>
              <td className="hourly-forecast-data-temp">
                <span className="hourly-forecast-temp">-2</span> °C
              </td>
              <td className="hourly-forecast-data-temp">
                <span className="hourly-forecast-temp">-3</span> °C
              </td>
              <td className="hourly-forecast-data-temp">
                <span className="hourly-forecast-temp">-3</span> °C
              </td>
              <td className="hourly-forecast-data-temp">
                <span className="hourly-forecast-temp">-5</span> °C
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
