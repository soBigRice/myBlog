/*
 * @Author: superRice
 * @Date: 2025-05-03 22:14:00
 * @LastEditors: superRice 63463970+soBigRice@users.noreply.github.com
 * @LastEditTime: 2025-05-03 22:40:54
 * @FilePath: /satelliteForRice/src/script/background/EventManager.js
 * @Description:
 * Do your best to be yourself
 * Copyright (c) 2025 by superRice, All Rights Reserved.
 */

import { EventDispatcher } from "three";

export class EventManager extends EventDispatcher {
  constructor() {
    super();
    EventManager._instance = this;
  }

  static _instance = null;
  static get instance() {
    if (!EventManager._instance) {
      EventManager._instance = new EventManager();
    }
    return EventManager._instance;
  }

  //初始化一些默认的事件
  init() {
    //添加窗口自适应事件
    window.addEventListener("resize", () => {
      this.dispatchEvent({ type: "resize" });
    });
  }
}
