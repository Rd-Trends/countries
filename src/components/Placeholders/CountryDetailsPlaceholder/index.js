import React from "react";
import Rect from "../Rect";

import S from "./CountryDetailsPlaceholder.module.css";

const CountryDetailsPlaceholder = () => {
  return (
    <div className={S.wrapper}>
      <Rect height="20rem" />
      <div className={S.group}>
        <div className={S.sub_group}>
          <Rect height="1rem" />
          <Rect height="1rem" />
          <Rect height="1rem" />
          <Rect height="1rem" />
          <Rect height="1rem" />
        </div>
        <div className={S.sub_group}>
          <Rect height="1rem" />
          <Rect height="1rem" />
          <Rect height="1rem" />
        </div>
      </div>
    </div>
  );
};

export default CountryDetailsPlaceholder;
