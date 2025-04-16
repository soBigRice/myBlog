/*
 * @Author: superRice
 * @Date: 2025-04-16 18:24:39
 * @LastEditors: superRice 1246333567@qq.com
 * @LastEditTime: 2025-04-16 22:42:33
 * @FilePath: /satelliteForRice/src/pages/Weather.jsx
 * @Description:
 * Do your best to be yourself
 * Copyright (c) 2025 by superRice, All Rights Reserved.
 */
import Api from "../api";
import Utils from "../utils";
import "./Weather.css";
const DailyWeather = () => {
  //获取天气

  const getWeather = async () => {
    Utils.getLocation((localData) => {
      Api.getWeather(localData.lng, localData.lat, (weatherData) => {
        Api.getAreaNameByCoordinate(
          weatherData.latitude,
          weatherData.longitude
        );
      });
    });
  };
  getWeather();

  return (
    <>
      <div className="weatherContainer">
        <h1>天气</h1>
      </div>
    </>
  );
};

export default DailyWeather;
