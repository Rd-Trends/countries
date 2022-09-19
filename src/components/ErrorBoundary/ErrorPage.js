import React from "react";
import S from "./Error.module.css"

const ErrorPage = () => {
  return (
    <div className={S.wrapper}>
      <span>Ooops!</span>
      <p>Slow or no internet connection</p>
      <p>Please check your internet settings</p>
    </div>
  );
};

export default ErrorPage;
