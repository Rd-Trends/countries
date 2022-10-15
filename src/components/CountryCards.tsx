import React, { memo, useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { Link } from "react-router-dom";
import { styles } from "../style";

import { countryDetails } from "../interfaces";
import { sortAlphabetically } from "../utils/SortAlphabetically";

interface countryCardsProps {
  search: string;
  region: string;
  setAllCountries: (arr: countryDetails[]) => void;
  allCountries: countryDetails[];
  currentCountries: countryDetails[];
  setCurrentCountries: (arr: countryDetails[]) => void;
  itemsPerPage: number;
  itemOffset: number;
}

const CountryCards = ({
  search,
  region,
  setAllCountries,
  allCountries,
  currentCountries,
  setCurrentCountries,
  itemsPerPage,
  itemOffset,
}: countryCardsProps) => {
  const baseURL = "https://restcountries.com/v3.1";

  const { data } = useSWR<countryDetails[]>(
    search
      ? `${baseURL}/name/${search}?fields=name,population,region,capital,flags`
      : region
      ? `${baseURL}/region/${region}?fields=name,population,region,capital,flags`
      : `${baseURL}/all?fields=name,population,region,capital,flags`,
    fetcher,
    { suspense: true }
  );

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setAllCountries(sortAlphabetically(data));
    } else {
      setAllCountries([]);
    }
  }, [data, setAllCountries]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    allCountries.length > 0 &&
      setCurrentCountries(allCountries.slice(itemOffset, endOffset));
  }, [itemOffset, allCountries, itemsPerPage, setCurrentCountries]);

  if (data?.constructor.name === "Object") {
    return (
      <p className="text-center text-xl text-[#ff0033]">
        No country found, please try searching with another term
      </p>
    );
  }

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-center min-h-screen">
      {currentCountries.length
        ? currentCountries.map((country, index) => {
            const { name, flags, population, region, capital } = country;

            return (
              <article
                key={name.common}
                className={`${styles.elementBg} ${styles.elementTextColor} ${styles.boxShadow} shadow-lg group w-full max-w-[17rem] overflow-x-hidden md:max-w-full rounded-md mx-auto md:mx-0`}
              >
                <Link to={`/country/${name.common}`}>
                  <>
                    <img
                      src={flags.svg}
                      alt={`${name.common}'s flag`}
                      loading={index > 4 ? "lazy" : "eager"}
                      className=" w-full rounded-t-md h-44 object-cover object-center group-hover:scale-[1.2] transition duration-300 ease-in-out"
                    />
                    <div className=" p-4">
                      <h3 className=" font-bold text-lg my-4">
                        {name.official}
                      </h3>
                      <p className=" text-sm mb-2">
                        <strong className=" font-semibold">Population:</strong>{" "}
                        {population.toLocaleString()}
                      </p>
                      <p className=" text-sm mb-2">
                        <strong className=" font-semibold">Region:</strong>{" "}
                        {region}
                      </p>
                      <p className=" text-sm mb-2">
                        <strong className=" font-semibold">Capital:</strong>{" "}
                        {capital}
                      </p>
                    </div>
                  </>
                </Link>
              </article>
            );
          })
        : ""}
    </div>
  );
};

export default memo(CountryCards);
