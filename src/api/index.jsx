/*
 * @Author: superRice
 * @Date: 2025-04-12 16:30:28
 * @LastEditors: soBigRice soBigRice@users.noreply.github.com
 * @LastEditTime: 2025-04-15 23:08:40
 * @FilePath: /satelliteForRice/src/api/index.jsx
 * @Description:
 * Do your best to be yourself
 * Copyright (c) 2025 by superRice, All Rights Reserved.
 */

import axios from "axios";

class Api {
  static async getDailyHeart(callback) {
    const options = { method: "GET", url: "https://nas.graphical.top/" };

    try {
      const { data } = await axios.request(options);
      callback?.(data);
    } catch (error) {
      console.error(error);
    }
  }
}

export default Api;
