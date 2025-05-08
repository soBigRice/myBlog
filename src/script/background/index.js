/*
 * @Author: superRice
 * @Date: 2025-05-03 16:02:07
 * @LastEditors: superRice 63463970+soBigRice@users.noreply.github.com
 * @LastEditTime: 2025-05-08 22:02:05
 * @FilePath: /satelliteForRice/src/script/background/index.js
 * @Description:
 * Do your best to be yourself
 * Copyright (c) 2025 by superRice, All Rights Reserved.
 */

import * as THREE from "three";
import { EventManager } from "./EventManager";

export class View3D {
  constructor({ container }) {
    this.container = container;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
    });

    this.container.appendChild(this.renderer.domElement);

    this.resize = this._resize.bind(this);
    EventManager.instance.addEventListener("resize", this.resize);

    const clock = new THREE.Clock();
    this.renderer.setAnimationLoop(() => {
      EventManager.instance.dispatchEvent({
        type: "animate",
        delta: clock.getDelta(),
      });
    });

    this.animate = this._animate.bind(this);

    EventManager.instance.addEventListener("animate", this.animate);
  }

  _resize() {
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.camera.aspect =
      this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
  }

  _animate() {
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {}
}
