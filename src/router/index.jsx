// src/router/index.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import DailyHeart from "../pages/DailyHeart";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dailyHeart",
        element: <DailyHeart />,
      },
    ],
  },
]);

export default router;
