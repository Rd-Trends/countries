import React, { memo } from "react";
import Select from "react-dropdown-select";
import PropTypes from "prop-types";

import { countryRegion } from "../../constants/countryRegions";

import S from "./FilterRegion.module.css";

const FilterRegion = ({ onRegionChange }) => {
  return (
    <Select
      options={countryRegion}
      values={[]}
      onChange={(values) =>
        values[0] ? onRegionChange(values[0].region) : onRegionChange("")
      }
      labelField="region"
      valueField="region"
      placeholder="Filter by Region"
      clearable={true}
      dropdownGap={5}
      className={S.dropdown_wrapper}
    />
  );
};

FilterRegion.propTypes = {
  onRegionChange: PropTypes.func.isRequired,
};

export default memo(FilterRegion);
