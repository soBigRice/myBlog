/*
 * @Author: superRice
 * @Date: 2025-04-16 22:30:03
 * @LastEditors: superRice 1246333567@qq.com
 * @LastEditTime: 2025-04-16 22:44:31
 * @FilePath: /satelliteForRice/src/api/areaNameApi.jsx
 * @Description:
 * Do your best to be yourself
 * Copyright (c) 2025 by superRice, All Rights Reserved.
 */
const apiKey = "adac429da5e44235937d351ef637086e";
// const latitude = 31.2304;
// const longitude = 121.4737; // 上海

/**
 * 根据经纬度获取位置名称
 *
 * @param {*} latitude  纬度
 * @param {*} longitude  经度
 * @param {*} callback  成功回调
 */
const getAreaNameByCoordinate = (latitude, longitude, callback) => {
  fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      const location = data.results[0];
      console.log("中文地址：", location);
      // 更多字段可以参考 location.components
      callback && callback(location.components);
    })
    .catch((err) => console.error("获取位置信息失败:", err));
};

export { getAreaNameByCoordinate };
