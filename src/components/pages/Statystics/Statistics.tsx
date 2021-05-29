import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

import css from "./Statistics.module.scss";

export const Statistics = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        Статистика
        {/* <ReactSpeedometer /> */}
      </div>
    </div>
  )
}