import React, { useEffect, useState } from "react";

const LocationInfo = (props) => {
  const [sunSetRise, setSunSetRise] = useState([]);

  useEffect(
    () =>
      convertFromEcho(props.location.sys.sunrise, props.location.sys.sunset),
    [props.location]
  );

  const getDegreeFormat = () => (props.degreeFormat ? "°F" : "°C");

  const converToFarenheit = (v) => Math.round((v * 9) / 5) + 32;

  const convertFromEcho = (rise, set) => {
    setSunSetRise([
      new Date(rise * 1000).toLocaleDateString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit"
      }),
      new Date(set * 1000).toLocaleDateString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit"
      })
    ]);
  };

  return (
    <div className="location-info">
      <div
        className="align-center"
        style={{
          gap: "20px",
          fontSize: "40px",
          margin: "0px"
        }}
      >
        <p style={{ margin: 0 }}>
          {props.location.name}, {props.location.sys.country}
        </p>
      </div>
      <div>
        <p
          className="align-center"
          style={{
            fontSize: "30px"
          }}
        >
          {props.degreeFormat
            ? converToFarenheit(Math.round(props.location.main.temp))
            : Math.round(props.location.main.temp)}
          {props.degreeFormat ? "°F" : "°C"}

          <img
            src={`http://openweathermap.org/img/wn/${props.location.weather[0].icon}@2x.png`}
            alt="weather-icon"
          />
        </p>
        <p>
          Feels Like
          {props.degreeFormat
            ? converToFarenheit(Math.round(props.location.main.feels_like))
            : Math.round(props.location.main.feels_like)}
          {getDegreeFormat()} | {props.location.weather[0].description} |
          Humidity: {props.location.main.humidity}%
        </p>
        <p>
          Sunrise: {sunSetRise[0]} | Sunset: {sunSetRise[1]}
        </p>
      </div>
    </div>
  );
};

export default LocationInfo;
