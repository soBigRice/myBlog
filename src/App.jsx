/*
 * @Author: superRice
 * @Date: 2025-04-11 11:20:15
 * @LastEditors: soBigRice soBigRice@users.noreply.github.com
 * @LastEditTime: 2025-04-12 17:18:39
 * @FilePath: /satelliteForRice/src/App.jsx
 * @Description:
 * Do your best to be yourself
 * Copyright (c) 2025 by superRice, All Rights Reserved.
 */
// import { useState } from "react";

import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { RouterProvider } from "react-router-dom";
import BottomBar from "./components/BottomBar";
import router from "./router";
import { CSSTransition, SwitchTransition } from "react-transition-group";

function App() {
  return (
    <>
      <div className="main">
        <div className="header">
          <NavigationBar />
        </div>
        <div className="content">
          <RouterProvider router={router} />
        </div>

        <div className="footer">
          <BottomBar />
        </div>
      </div>
    </>
  );
}

export default App;
