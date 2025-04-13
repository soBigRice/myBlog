/Users/superrice/MyPersionFile/CodeWork/CodePublic/satelliteForRice/vite.config.js
/*
 * @Author: superRice
 * @Date: 2025-04-11 11:20:15
 * @LastEditors: soBigRice soBigRice@users.noreply.github.com
 * @LastEditTime: 2025-04-13 09:35:16
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
  base: "/myBlog/",
});
