import React from "react";
import S from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={S.loader_wrapper}>
      <div className={S.lds_ripple}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
