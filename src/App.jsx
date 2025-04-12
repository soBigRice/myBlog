/*
 * @Author: superRice
 * @Date: 2025-04-11 11:20:15
 * @LastEditors: superRice 1246333567@qq.com
 * @LastEditTime: 2025-04-11 16:15:41
 * @FilePath: /satelliteForRice/src/App.jsx
 * @Description:
 * Do your best to be yourself
 * Copyright (c) 2025 by superRice, All Rights Reserved.
 */
// import { useState } from "react";

import "./App.css";
import NavigationBar from "./components/NavigationBar";
function App() {
  return (
    <>
      <div className="main">
        <div className="header">
          <NavigationBar />
        </div>
        <div className="content">内容</div>
        <div className="footer">底部</div>
      </div>
    </>
  );
}

export default App;
