/*
 * @Author: superRice
 * @Date: 2025-04-16 20:38:44
 * @LastEditors: superRice 1246333567@qq.com
 * @LastEditTime: 2025-04-16 20:44:24
 * @FilePath: /satelliteForRice/src/utils/Locater.jsx
 * @Description:
 * Do your best to be yourself
 * Copyright (c) 2025 by superRice, All Rights Reserved.
 */

/**
 * 根据GPS获取位置
 *
 * @param {*} callback 获取成功
 * @param {*} failCallback 获取失败
 */
const getGPSLocation = (callback, failCallback) => {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      callback && callback(pos);
    },
    function (error) {
      failCallback && failCallback(error);
    }
  );
};

/**
 * 根据IP获取位置
 *
 * @param {*} callback 获取成功
 * @param {*} errorCallback 获取失败
 */
const getIPLocation = (callback, errorCallback) => {
  fetch("https://ipapi.co/json/")
    .then((response) => response.json())
    .then((location) => {
      const lat = location.latitude;
      const lng = location.longitude;
      // 使用 lat 和 lon 获取天气信息
      callback && callback({ lat, lng });
    })
    .catch((error) => {
      errorCallback && errorCallback(error);
    });
};

/**
 * 获取位置
 *
 * @param {*} successCallback  获取成功
 * @param {*} failCallback  获取失败
 */
const getLocation = (successCallback, failCallback) => {
  getGPSLocation(
    (pos) => {
      successCallback && successCallback(pos);
    },
    () => {
      getIPLocation(
        (pos) => {
          successCallback && successCallback(pos);
        },
        (error) => {
          failCallback && failCallback(error);
        }
      );
    }
  );
};

export { getGPSLocation, getIPLocation, getLocation };
