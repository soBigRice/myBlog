import "./NavigationBar.css";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavigationBar() {
  const [isHovering, setIsHovering] = useState(false);
  const navbarRef = useRef(null); // 导航栏 DOM 引用
  const indicatorRef = useRef(null); // 指示器 DOM 引用
  const location = useLocation();
  console.log(location.pathname);

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
    setIsHovering(true);
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

  const handleMouseLeave = () => {
    setIsHovering(false);
    const activeLink = navbarRef.current.querySelector("a.active");
    if (activeLink && indicatorRef.current) {
      const rect = activeLink.getBoundingClientRect();
      const navbarRect = navbarRef.current.getBoundingClientRect();
      indicatorRef.current.style.left = `${rect.left - navbarRect.left}px`;
      indicatorRef.current.style.width = `${rect.width}px`;
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
    if (navbarRef.current && indicatorRef.current && !isHovering) {
      const activeLink = navbarRef.current.querySelector("a.active");
      if (activeLink) {
        const rect = activeLink.getBoundingClientRect();
        const navbarRect = navbarRef.current.getBoundingClientRect();
        indicatorRef.current.style.left = `${rect.left - navbarRect.left}px`;
        indicatorRef.current.style.width = `${rect.width}px`;
      }
    }
  }, [location.pathname, isHovering]);

  return (
    <div className="navbar" ref={navbarRef} onMouseLeave={handleMouseLeave}>
      {/* 指示器：负责展示水滴的融合和按压动画 */}
      <div className="hover-indicator" ref={indicatorRef}></div>
      {/* 渲染导航按钮 */}

      {buttons.map((btn, index) => (
        <Link
          className={`navbar-link ${
            location.pathname === btn.url ? "active" : ""
          }`}
          to={btn.url}
          key={index}
          onClick={() => handleClick(btn)}
          onMouseEnter={handleMouseEnter}
        >
          {btn.name}
        </Link>
      ))}
    </div>
  );
}

export default NavigationBar;
