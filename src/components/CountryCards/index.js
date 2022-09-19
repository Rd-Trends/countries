import React, { memo, useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { sortAlphabetically } from "../../utils/SsortAlphabetically";

import S from "./CountryCards.module.css";

const CountryCards = ({
  search,
  region,
  setAllCountries,
  allCountries,
  currentCountries,
  setCurrentCountries,
  itemsPerPage,
  itemOffset,
}) => {
  const baseURL = "https://restcountries.com/v3.1";

  const { data, error } = useSWR(
    search
      ? `${baseURL}/name/${search}?fields=name,population,region,capital,flags,subregion,languages,currencies,tld,borders`
      : region
      ? `${baseURL}/region/${region}?fields=name,population,region,capital,flags`
      : `${baseURL}/all?fields=name,population,region,capital,flags`,
    fetcher,
    { suspense: true }
  );

  useEffect(() => {
    if (data && Array.isArray(data)) {
      console.log(data);
      setAllCountries(sortAlphabetically(data));
    }
  }, [data, setAllCountries]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    allCountries.length > 0 &&
      setCurrentCountries(allCountries.slice(itemOffset, endOffset));
  }, [itemOffset, allCountries, itemsPerPage, setCurrentCountries]);

  if (data.constructor.name === "Object") {
    return (
      <p className={S.error_text}>
        No country found, please try searching with another term
      </p>
    );
  }

  return (
    <>
      {currentCountries.length &&
        currentCountries.map((country) => {
          const { name, flags, population, region, capital } = country;

          return (
            <article className={S.country_card} key={name.common}>
              <Link to={`/country/${name.common}`}>
                <>
                  <img
                    src={flags.svg}
                    alt={`${name.common}'s flag`}
                    loading="lazy"
                  />
                  <div>
                    <h3>{name.official}</h3>
                    <p>
                      <strong>Population:</strong> {population.toLocaleString()}
                    </p>
                    <p>
                      <strong>Region:</strong> {region}
                    </p>
                    <p>
                      <strong>Capital:</strong> {capital}
                    </p>
                  </div>
                </>
              </Link>
            </article>
          );
        })}
    </>
  );
};

CountryCards.propTypes = {
  allCountries: PropTypes.array.isRequired,
  currentCountries: PropTypes.array.isRequired,
  setCurrentCountries: PropTypes.func.isRequired,
  setAllCountries: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};

export default memo(CountryCards);
