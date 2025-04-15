/*
 * @Author: superRice
 * @Date: 2025-04-13 09:22:14
 * @LastEditors: soBigRice soBigRice@users.noreply.github.com
 * @LastEditTime: 2025-04-15 23:12:13
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
      <h1>404,别看，还没好</h1>
      <p>抱歉，主人还在拼命的搬砖搭建中</p>
      <Link to="/">返回首页</Link>
    </div>
  );
}
