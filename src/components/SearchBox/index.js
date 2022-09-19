import React, { memo } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import PropTypes from "prop-types";

import S from "./Searchbox.module.css";

const Search = ({ name, onSearchChange }) => {
  return (
    <form className={S.search_box_wrapper}>
      <button aria-label="Search">
        <AiOutlineSearch />
      </button>
      <input
        type="search"
        placeholder="Search for a country..."
        value={name}
        onChange={onSearchChange}
      />
    </form>
  );
};

Search.propTypes = {
  name: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default memo(Search);
