/*
 * @Author: superRice
 * @Date: 2025-04-13 09:22:14
 * @LastEditors: soBigRice soBigRice@users.noreply.github.com
 * @LastEditTime: 2025-04-13 09:23:21
 * @FilePath: /satelliteForRice/src/pages/NoFound.jsx
 * @Description:
 * Do your best to be yourself
 * Copyright (c) 2025 by superRice, All Rights Reserved.
 */
// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./NoFound.css"; // 如有需要可以添加样式

export default function NoFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>抱歉，页面不存在。</p>
      <Link to="/">返回首页</Link>
    </div>
  );
}
