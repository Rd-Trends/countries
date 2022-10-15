import { useEffect, useState } from "react";
import { Link, To, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

// import { fetchBorderCountriesByAlphaCode } from "../../api";
import { getValuesFromNestedObjects } from "../utils/getValuesFromNestedObjects";
import Button from "./Button";
import { IoIosArrowRoundBack } from "react-icons/io";

import { styles } from "../style";

import { countryDetailsComplete, countryName } from "../interfaces";

export const fetchBorderCountriesByAlphaCode = async (
  borders: string[]
): Promise<{ name: countryName }[]> => {
  try {
    const borderCountries = await Promise.all(
      borders.map(async (border) => {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${border}?fields=name`
        );
        return await response.json();
      })
    );
    return borderCountries;
  } catch (e) {
    throw new Error("unable to fetch country by code");
  }
};

const CountryDetails = ({ country }: { country: string }) => {
  const navigate = useNavigate();
  const [countryData, setCountryData] = useState<countryDetailsComplete | null>(
    null
  );
  const [borders, setBorders] = useState<string[]>([]);
  const [borderCountries, setBorderCountries] = useState<
    { name: countryName }[]
  >([]);
  const { data } = useSWR<countryDetailsComplete[]>(
    country
      ? `https://restcountries.com/v3.1/name/${country}?fields=name,population,region,capital,flags,subregion,languages,currencies,tld,borders`
      : null,
    fetcher,
    { suspense: true }
  );

  useEffect(() => {
    const getBorderCountries = async () => {
      const data = await fetchBorderCountriesByAlphaCode(borders);
      setBorderCountries(data);
      // console.log(data);
    };

    if (borders) {
      getBorderCountries();
    }
  }, [borders]);

  useEffect(() => {
    if (data) {
      // console.log(data);
      setCountryData(data[0]);
      setBorders(data[0].borders);
    }
  }, [data]);

  const navigateBackwards = () => {
    navigate(-1 as To, { replace: false });
  };

  return (
    <section
      className={`${styles.paddingX} py-10 ${styles.elementTextColor} pb-[8rem]`}
    >
      <Button onClick={navigateBackwards}>
        <IoIosArrowRoundBack className=" inline" />
        <span className="mx-2">back</span>
      </Button>
      <div
        className={`flex flex-col lg:flex-row justify-between lg:space-x-16 md:items-center mt-10`}
      >
        <img
          className="lg:w-1/2 mb-8 lg:mb-0"
          src={countryData?.flags?.svg}
          alt={`${countryData?.name?.common}'s flag`}
        />
        <div className="w-full md:w-9/12">
          <h1 className=" text-2xl font-semibold mb-8">
            {countryData?.name?.common}
          </h1>
          <div className={`flex flex-col md:flex-row  justify-between `}>
            <div className={`[&>p]:mb-2 mr-4`}>
              <p>
                <strong className="mr-2">Native Name:</strong>{" "}
                {countryData?.name?.common}
              </p>
              {countryData?.population && (
                <p>
                  <strong className="mr-2">Pouplation:</strong>
                  {countryData?.population.toLocaleString()}
                </p>
              )}
              {countryData?.region && (
                <p>
                  <strong>Region:</strong> {countryData?.region}
                </p>
              )}
              {countryData?.subregion && (
                <p>
                  <strong>Sub Region:</strong> {countryData?.subregion}
                </p>
              )}
              {countryData?.capital && (
                <p>
                  <strong className="mr-2">Capital:</strong>
                  {countryData?.capital.toString().split(",")}
                </p>
              )}
            </div>
            <div className={`[&>p]:mb-2 mt-8 md:mt-0`}>
              {countryData?.tld && (
                <p>
                  <strong className="mr-2">Top Level Domain:</strong>
                  {countryData?.tld.toString().split(" ")}
                </p>
              )}
              {countryData?.currencies && (
                <p>
                  <strong className="mr-2">Currencies:</strong>
                  {getValuesFromNestedObjects(countryData?.currencies).map(
                    (currency) => (
                      <span key={currency}>{currency}</span>
                    )
                  )}
                </p>
              )}
              {countryData?.languages && (
                <p>
                  <strong className="mr-2">Languages:</strong>
                  {getValuesFromNestedObjects(countryData?.languages).map(
                    (language) => (
                      <span key={language}>{language}</span>
                    )
                  )}
                </p>
              )}
            </div>
          </div>
          {borderCountries.length > 0 && (
            <div className={`flex items-start mt-8 md:mt-16`}>
              <p className="mr-2">
                <strong>Border Countries: </strong>
              </p>

              <ul className="flex flex-wrap space-x-2 space-y-2">
                {borderCountries.map((country) => (
                  <li key={country.name.common}>
                    <Button tag={Link} to={`/country/${country.name.common}`}>
                      {country.name.common}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
