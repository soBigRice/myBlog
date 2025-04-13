/*
 * @Author: superRice
 * @Date: 2025-04-11 11:20:15
 * @LastEditors: soBigRice soBigRice@users.noreply.github.com
 * @LastEditTime: 2025-04-13 10:50:34
 * @FilePath: /satelliteForRice/vite.config.js
 * @Description:
 * Do your best to be yourself
 * Copyright (c) 2025 by superRice, All Rights Reserved.
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // 注意：要引入 path

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
  },
  base: "/myBlog/",
  resolve: {
    alias: {
      "/public": path.resolve(__dirname, "./myBlog"),
    },
  },
});
