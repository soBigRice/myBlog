/*
 * @Author: superRice
 * @Date: 2025-04-12 15:44:30
 * @LastEditors: superRice 1246333567@qq.com
 * @LastEditTime: 2025-04-16 18:26:42
 * @FilePath: /satelliteForRice/src/router/index.jsx
 * @Description:
 * Do your best to be yourself
 * Copyright (c) 2025 by superRice, All Rights Reserved.
 */
// src/router/index.jsx
import React from "react";
import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import DailyHeart from "../pages/DailyHeart";
import NoFound from "../pages/NoFound"; // 新增导入
import AnimatedOutlet from "../components/AnimatedOutlet";
import DailyWeather from "../pages/Weather";

const router = createHashRouter([
  {
    path: "/",
    element: <AnimatedOutlet />,
    children: [
      {
        index: true, // 默认子路由，不写 path
        element: <Home />,
      },
      {
        path: "dailyHeart", // 相对路径，不以斜杠开头
        element: <DailyHeart />,
      },
      {
        path: "weather",
        element: <DailyWeather />,
      },
      // 添加一个 catch-all 路由
      {
        path: "*",
        element: <NoFound />,
      },
    ],
  },
]);

export default router;
