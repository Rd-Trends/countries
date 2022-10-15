import React from "react";
import { styles } from "../style";

const PlaceHolder = () => {
  return (
    <div
      className={`${styles.elementBg} flex flex-col items-center h-[350px] mx-auto w-full max-w-[17rem] rounded-lg mt-10 [&>div]:bg-slate-200 [&>div]:dark:bg-slate-600 [&>div]:animate-pulse`}
    >
      <div className=" w-full h-[200px] rounded-t-lg mb-8"></div>
      <div className=" w-11/12 h-5 rounded-sm mb-3"></div>
      <div className=" w-11/12 h-4 rounded-sm mb-3"></div>
      <div className=" w-11/12 h-4 rounded-sm mb-3"></div>
    </div>
  );
};

const CardPlaceHolder = () => (
  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-center">
    {[...Array(12)].map((e, i) => (
      <PlaceHolder key={i} />
    ))}
  </div>
);

export default CardPlaceHolder;
