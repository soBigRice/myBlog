/*
 * @Author: superRice
 * @Date: 2025-04-12 16:00:27
 * @LastEditors: soBigRice soBigRice@users.noreply.github.com
 * @LastEditTime: 2025-04-15 23:22:12
 * @FilePath: /satelliteForRice/src/pages/DailyHeart.jsx
 * @Description:
 * Do your best to be yourself
 * Copyright (c) 2025 by superRice, All Rights Reserved.
 */
import Api from "../api";
import "./DailyHeart.css";
import { useEffect, useState } from "react";
const DailyHeart = () => {
  const [dailyData, setDailyData] = useState({
    content: "",
    author: "",
    from: "",
  });

  const updateDailyLanguage = () => {
    // 更新语言
    Api.getDailyHeart((data) => {
      console.log(data);
      setDailyData(() => {
        return {
          content: data.hitokoto,
          author: data.from_who,
          from: data.from,
        };
      });
    });
  };
  useEffect(() => {
    updateDailyLanguage();
  }, []);

  return (
    <>
      <div className="dailyHeart">
        <div className="dailyHeart-area">
          <div className="dailyHeart-content">
            <h1>{dailyData.content}</h1>
          </div>
          <div className="dailyHeart-author">
            <h4 className="dailyHeart-author-name">
              作者:{dailyData.author}
              <br />
              来源：{dailyData.from}
            </h4>
          </div>

          <button onClick={updateDailyLanguage}>换一换</button>
        </div>
      </div>
    </>
  );
};

export default DailyHeart;
