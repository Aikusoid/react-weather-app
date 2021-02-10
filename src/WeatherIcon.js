import React from "react";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
  let codeMapping = {
    "01d": "https://assets9.lottiefiles.com/temp/lf20_Stdaec.json",
    "01n": "https://assets8.lottiefiles.com/temp/lf20_y6mY2A.json",
    "02d": "https://assets8.lottiefiles.com/temp/lf20_dgjK9i.json",
    "02n": "https://assets1.lottiefiles.com/temp/lf20_Jj2Qzq.json",
    "03d": "https://assets9.lottiefiles.com/temp/lf20_VAmWRg.json",
    "03n": "https://assets9.lottiefiles.com/temp/lf20_VAmWRg.json",
    "04d": "https://assets9.lottiefiles.com/temp/lf20_VAmWRg.json",
    "04n": "https://assets9.lottiefiles.com/temp/lf20_VAmWRg.json",
    "09d": "https://assets8.lottiefiles.com/temp/lf20_rpC1Rd.json",
    "09n": "https://assets1.lottiefiles.com/temp/lf20_I5XMi9.json",
    "10d": "https://assets8.lottiefiles.com/temp/lf20_rpC1Rd.json",
    "10n": "https://assets1.lottiefiles.com/temp/lf20_I5XMi9.json",
    "11d": "https://assets9.lottiefiles.com/temp/lf20_XkF78Y.json",
    "11n": "https://assets9.lottiefiles.com/temp/lf20_XkF78Y.json",
    "13d": "https://assets8.lottiefiles.com/temp/lf20_BSVgyt.json",
    "13n": "https://assets3.lottiefiles.com/temp/lf20_RHbbn6.json",
    "50d": "https://assets1.lottiefiles.com/temp/lf20_HflU56.json",
    "50n": "https://assets1.lottiefiles.com/temp/lf20_kOfPKE.json",
  };

  return (
    <lottie-player
      src={codeMapping[props.code]}
      background="transparent"
      speed="1.5"
      loop
      autoplay
    ></lottie-player>
  );
}
