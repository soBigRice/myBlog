/*
 * @Author: superRice
 * @Date: 2025-04-16 20:56:39
 * @LastEditors: superRice 1246333567@qq.com
 * @LastEditTime: 2025-04-16 22:41:41
 * @FilePath: /satelliteForRice/src/api/weatherApi.jsx
 * @Description:
 * Do your best to be yourself
 * Copyright (c) 2025 by superRice, All Rights Reserved.
 */
import { fetchWeatherApi } from "openmeteo";

const url = "https://api.open-meteo.com/v1/forecast";
const params = {
  //默认北京的经纬度
  latitude: 39.9042,
  longitude: 116.4074,
  current: ["weather_code", "temperature_2m"],
  timezone: "auto",
  forecast_days: 1,
};

/**
 * 异步获取天气信息。
 * 该函数通过 fetchWeatherApi 异步获取指定位置的天气数据，并处理这些数据，包括时区和地理位置信息，
 * 最终输出每小时的温度数据。
 *
 * @async
 * @param {*} longitude   经度
 * @param {*} latitude    纬度
 * @param {*} callback    成功回调
 * @param {*} failCallback 失败回调
 * @returns {*}
 */
const getWeather = async (longitude, latitude, callback, failCallback) => {
  params.latitude = latitude;
  params.longitude = longitude;
  const responses = await fetchWeatherApi(url, params);

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];

  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();
  //   const timezone = response.timezone();
  //   const timezoneAbbreviation = response.timezoneAbbreviation();
  const weatherLatitude = response.latitude();
  const weatherLongitude = response.longitude();

  const current = response.current();
  if (!current) {
    console.error("No current weather data");
    failCallback && failCallback();
    return;
  }

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      //天气代码
      weatherCode: current.variables(0)?.value(),
      //温度2m
      temperature2m: current.variables(1)?.value(),
      latitude: weatherLatitude,
      longitude: weatherLongitude,
    },
  };

  //   console.log("Weather data:", weatherData, "天气数据");
  callback && callback(weatherData.current);
};

export { getWeather };
