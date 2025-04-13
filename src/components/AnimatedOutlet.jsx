// src/components/AnimatedOutlet.jsx
import React, { useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import NavigationBar from "./NavigationBar";
import BottomBar from "./BottomBar";
import "./AnimatedOutlet.css";

function AnimatedOutlet() {
  const location = useLocation();
  // 为 CSSTransition 创建一个引用，避免内部调用 findDOMNode
  const nodeRef = useRef(null);

  return (
    <div className="main">
      <div className="header">
        <NavigationBar />
      </div>
      <div className="content">
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef} // 添加 nodeRef 以避免 findDOMNode 调用
            classNames="fade"
            timeout={300}
            unmountOnExit
          >
            {/* 将引用传给最外层 DOM 元素 */}
            <div ref={nodeRef} className="animated-page">
              <Outlet />
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
      <div className="footer">
        <BottomBar />
      </div>
    </div>
  );
}

export default AnimatedOutlet;
