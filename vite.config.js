/*
 * @Author: superRice
 * @Date: 2025-04-11 11:20:15
 * @LastEditors: superRice 1246333567@qq.com
 * @LastEditTime: 2025-04-16 21:02:48
 * @FilePath: /satelliteForRice/vite.config.js
 * @Description:
 * Do your best to be yourself
 * Copyright (c) 2025 by superRice, All Rights Reserved.
 */
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: "0.0.0.0",
//   },
//   base: "/myBlog/",
//   resolve: {},
// });

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
      host: "0.0.0.0",
      cors: true,
    },
    base: env.VITE_APP_BASE_URL || "/",
    resolve: {},
  };
});
