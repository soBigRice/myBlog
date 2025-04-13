// src/router/index.jsx
import React from "react";
import { createHashRouter } from "react-router-dom";
import Home from "../pages/Home";
import DailyHeart from "../pages/DailyHeart";
import NoFound from "../pages/NoFound"; // 新增导入
import AnimatedOutlet from "../components/AnimatedOutlet";

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
      // 添加一个 catch-all 路由
      {
        path: "*",
        element: <NoFound />,
      },
    ],
  },
]);

export default router;
