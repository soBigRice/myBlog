/*
 * @Author: superRice
 * @Date: 2025-04-11 11:20:15
 * @LastEditors: superRice 63463970+soBigRice@users.noreply.github.com
 * @LastEditTime: 2025-05-03 15:51:20
 * @FilePath: /satelliteForRice/src/App.jsx
 * @Description:
 * Do your best to be yourself
 * Copyright (c) 2025 by superRice, All Rights Reserved.
 */
// src/App.jsx
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
function App() {
  return (
    <div className="main">
      {/* RouterProvider 会让下面的 AnimatedOutlet（含 NavigationBar、BottomBar、Outlet）共享同一个路由上下文 */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
