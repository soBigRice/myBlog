/*
 * @Author: superRice
 * @Date: 2025-04-12 16:30:28
 * @LastEditors: superRice 1246333567@qq.com
 * @LastEditTime: 2025-04-16 22:39:17
 * @FilePath: /satelliteForRice/src/api/index.jsx
 * @Description:
 * Do your best to be yourself
 * Copyright (c) 2025 by superRice, All Rights Reserved.
 */

import axios from "axios";
import { getWeather } from "./weatherApi";
import { getAreaNameByCoordinate } from "./areaNameApi";
class Api {
  /**
   * 获取每日一言的接口
   *
   * @static
   * @async
   * @param {*} callback
   * @returns {*}
   */
  static async getDailyHeart(callback) {
    const options = {
      method: "GET",
      url: "https://hitokotoapi.sobigrice.cfd/",
    };

    try {
      const { data } = await axios.request(options);
      callback?.(data);
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * 根据经纬度获取天气信息
   *
   * @static
   * @type {(lng: any, lat: any, callback: any, failCallback: any) => any}
   */
  static getWeather = getWeather;

  /**
   * 根据经纬度获取位置名称
   *
   * @static
   * @type {(latitude: any, longitude: any) => void}
   */
  static getAreaNameByCoordinate = getAreaNameByCoordinate;
}

export default Api;
