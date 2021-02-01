import React from "react";

export default function SunriseSunset(){
    return(
        <div className="SunriseSunset">
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