import React from "react";
import Rect from "./Rect";

import S from "./Placeholder.module.css";

const CardPlaceholder = () => {
  return (
    <div className={S.card}>
      <Rect height="11rem" />
      <Rect height="2rem" />
      <Rect height="1rem" />
      <Rect height="1rem" />
    </div>
  );
};

export default CardPlaceholder;
