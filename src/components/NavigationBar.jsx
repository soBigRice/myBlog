/*
 * @Author: superRice
 * @Date: 2025-04-11 16:12:52
 * @LastEditors: soBigRice soBigRice@users.noreply.github.com
 * @LastEditTime: 2025-04-13 09:10:20
 * @FilePath: /satelliteForRice/src/components/NavigationBar.jsx
 * @Description:
 * Do your best to be yourself
 * Copyright (c) 2025 by superRice, All Rights Reserved.
 */
import "./NavigationBar.css";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  const navbarRef = useRef(null); // 导航栏 DOM 引用
  const indicatorRef = useRef(null); // 指示器 DOM 引用

  // 导航按钮数据
  const buttons = [
    { name: "首页", url: "/" },
    { name: "案例", url: "/example" },
    { name: "博客", url: "/blog" },
    { name: "今日天气", url: "/weather" },
    { name: "每日一言", url: "/dailyHeart" },
    { name: "关于我", url: "/about" },
  ];

  // 鼠标移入时更新指示器的位置和宽度，并触发水滴融合动画
  const handleMouseEnter = (e) => {
    const rect = e.target.getBoundingClientRect();
    const navbarRect = navbarRef.current.getBoundingClientRect();
    const newLeft = rect.left - navbarRect.left;
    const newWidth = rect.width;

    if (indicatorRef.current) {
      // 更新位置与宽度（利用 transition 平滑过渡）
      indicatorRef.current.style.left = `${newLeft}px`;
      indicatorRef.current.style.width = `${newWidth}px`;

      // 触发融合动画：删除再添加 animate 类（利用 reflow 机制确保动画能重新触发）
      indicatorRef.current.classList.remove("animate");
      void indicatorRef.current.offsetWidth; // 触发 reflow
      indicatorRef.current.classList.add("animate");
    }
  };

  // 点击时触发“按压”动画
  const handleClick = (btn) => {
    console.log(btn, "clicked");
    if (indicatorRef.current) {
      indicatorRef.current.classList.remove("press");
      // 触发 reflow 确保动画可重复
      void indicatorRef.current.offsetWidth;
      indicatorRef.current.classList.add("press");
      // 动画结束后移除 press 类（与动画时长一致，400ms）
      setTimeout(() => {
        if (indicatorRef.current) {
          indicatorRef.current.classList.remove("press");
        }
      }, 400);
    }
  };

  // 组件加载时，初始化指示器的位置和宽度基于第一个按钮
  useEffect(() => {
    if (navbarRef.current && indicatorRef.current) {
      const firstLink = navbarRef.current.querySelector("a");
      if (firstLink) {
        const rect = firstLink.getBoundingClientRect();
        const navbarRect = navbarRef.current.getBoundingClientRect();
        indicatorRef.current.style.left = `${rect.left - navbarRect.left}px`;
        indicatorRef.current.style.width = `${rect.width}px`;
      }
    }
  }, []);

  return (
    <div className="navbar" ref={navbarRef}>
      {/* 指示器：负责展示水滴的融合和按压动画 */}
      <div className="hover-indicator" ref={indicatorRef}></div>
      {/* 渲染导航按钮 */}

      {buttons.map((btn, index) => (
        <Link
          className="navbar-link"
          to={btn.url}
          key={index}
          onClick={() => handleClick(btn)}
          onMouseEnter={handleMouseEnter}
        >
          {btn.name}
        </Link>
        // <a
        //   href={btn.url}
        //   key={index}
        //   onMouseEnter={handleMouseEnter}
        //   onClick={() => handleClick(btn)}
        //   data-text={btn.name}
        // >
        //   {btn.name}
        // </a>
      ))}
    </div>
  );
}

export default NavigationBar;
