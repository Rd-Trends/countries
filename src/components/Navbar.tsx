import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { styles } from "../style";

interface props {
  theme: string;
  switchTheme: () => void;
}

const Navbar = ({ theme, switchTheme }: props) => {
  return (
    <nav
      className={`flex items-center justify-between shadow-lg py-5 bg-element-bg dark:bg-dark-element-bg ${styles.paddingX} ${styles.elementTextColor} ${styles.boxShadow}`}
    >
      <span className="font-bold">Where in the world</span>
      <button
        onClick={switchTheme}
        className="flex items-center outline-none bg-transparent font-light"
      >
        {theme === "light" ? <BsMoon /> : <BsSun />}
        <span className=" ml-2">
          {theme === "light" ? "Dark mode" : "light mode"}
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
