import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import S from "./NotFound.module.css";

const NotFoundPage = () => {
  return (
    <div className={S.wrapper}>
      <span>404</span>
      <p>Page Not Found</p>
      <small>Sorry, we can't find the page you are looking for</small>
      <Button Tag={Link} to="/">Go Back Home</Button>
    </div>
  );
};

export default NotFoundPage;
