/*
 * @Author: superRice
 * @Date: 2025-05-03 15:34:33
 * @LastEditors: superRice 63463970+soBigRice@users.noreply.github.com
 * @LastEditTime: 2025-05-03 21:45:46
 * @FilePath: /satelliteForRice/src/components/Background.jsx
 * @Description:
 * Do your best to be yourself
 * Copyright (c) 2025 by superRice, All Rights Reserved.
 */

import { useEffect } from "react";
import { View3D } from "../script/background";
import "./Background.css";

const Background = () => {
  useEffect(() => {
    const container = document.getElementById("background");
    let view3D;

    if (container) {
      view3D = new View3D({ container });
    }

    return () => {
      if (view3D) {
        view3D.dispose(); // 调用清理逻辑
      }
    };
  }, []);

  return <div id="background"></div>;
};

export default Background;
