import React from "react";
import { styles } from "../style";

const CountryDetailsPlaceholder = () => {
  return (
    <div
      className={` ${styles.paddingX} flex flex-col lg:flex-row justify-between lg:space-x-16 md:items-center mt-10 animate-pulse`}
    >
      <div
        className={`w-full lg:w-1/2 h-[250px] md:h-[350px] rounded-lg mt-10 bg-slate-200 dark:bg-slate-600 [&>div]:animate-pulse`}
      ></div>
      <div className="w-full  md:w-9/12 lg:w-1/2 flex flex-col md:flex-row md:space-x-8 justify-between ">
        <div
          className={`w-full flex flex-col items-center rounded-lg mt-10 [&>div]:bg-slate-200 [&>div]:dark:bg-slate-600 [&>div]:animate-pulse`}
        >
          <div className=" w-full h-4 rounded-sm mb-3"></div>
          <div className=" w-full h-4 rounded-sm mb-3"></div>
          <div className=" w-full h-4 rounded-sm mb-3"></div>
          <div className=" w-full h-4 rounded-sm mb-3"></div>
          <div className=" w-full h-4 rounded-sm mb-3"></div>
        </div>

        <div
          className={`w-full flex flex-col items-center rounded-lg mt-10 [&>div]:bg-slate-200 [&>div]:dark:bg-slate-600 [&>div]:animate-pulse`}
        >
          <div className=" w-full h-4 rounded-sm mb-3"></div>
          <div className=" w-full h-4 rounded-sm mb-3"></div>
          <div className=" w-full h-4 rounded-sm mb-3"></div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailsPlaceholder;
