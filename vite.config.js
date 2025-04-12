/*
 * @Author: superRice
 * @Date: 2025-04-11 11:20:15
 * @LastEditors: superRice 1246333567@qq.com
 * @LastEditTime: 2025-04-11 13:09:19
 * @FilePath: /satelliteForRice/vite.config.js
 * @Description:
 * Do your best to be yourself
 * Copyright (c) 2025 by superRice, All Rights Reserved.
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
  },
});
