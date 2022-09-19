import React from "react";
import S from "./Placeholder.module.css";

const Rect = ({ width, height }) => {
  return (
    <div
      className={`${S.rect} ${S.rect__image} ${S.shimmer}`}
      style={{ width, height }}
    ></div>
  );
};

export default Rect;
