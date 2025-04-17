/*
 * @Author: superRice
 * @Date: 2025-04-16 18:24:39
 * @LastEditors: superRice 63463970+soBigRice@users.noreply.github.com
 * @LastEditTime: 2025-04-17 11:55:31
 * @FilePath: /satelliteForRice/src/pages/Weather.jsx
 * @Description:
 * Do your best to be yourself
 * Copyright (c) 2025 by superRice, All Rights Reserved.
 */
import { useState } from "react";
import Api from "../api";
import Utils from "../utils";
import "./Weather.css";
const DailyWeather = () => {
  //获取地区数据
  const [areaData, setAreaData] = useState({
    country: "中国",
    state: "北京市",
    city: "东城区",
    town: "东直门街道",
  });

  const [weatherData, setWeatherData] = useState({
    temperature2m: 25, //气温
    weatherCode: 1, //天气状况
  });

  const getWeather = async () => {
    Utils.getLocation((localData) => {
      Api.getWeather(localData.lng, localData.lat, (weatherData) => {
        console.log(weatherData, "weatherData");
        setWeatherData({
          temperature2m: Math.round(weatherData.temperature2m),
          weatherCode: weatherData.weatherCode,
        });

        Api.getAreaNameByCoordinate(
          weatherData.latitude,
          weatherData.longitude,
          (areaData) => {
            setAreaData({
              country: areaData.country,
              state: areaData.state,
              city: areaData.city,
              town: areaData.town,
            });
          }
        );
      });
    });
  };
  getWeather();

  return (
    <>
      <div className="weatherContainer">
        <div className="weather-area">
          <h1>天气</h1>
          <h2>
            {areaData.country}-{areaData.state}-{areaData.city}-{areaData.town}
          </h2>
          <h2>气温:{weatherData.temperature2m}摄氏度</h2>
        </div>
      </div>
    </>
  );
};

export default DailyWeather;
