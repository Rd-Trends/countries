import React, { memo } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { styles } from "../style";

interface props {
  name: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ name, onSearchChange }: props) => {
  return (
    <form
      className={`flex items-center w-[400px] max-w-[100%] rounded shadow-lg ${styles.elementBg} ${styles.elementTextColor} ${styles.boxShadow} `}
    >
      <button
        aria-label="Search"
        className=" bg-transparent outline-none py-4 pl-4"
      >
        <AiOutlineSearch />
      </button>
      <input
        type="search"
        placeholder="Search for a country..."
        className="bg-transparent outline-none p-4"
        value={name}
        onChange={onSearchChange}
      />
    </form>
  );
};

export default memo(Search);
