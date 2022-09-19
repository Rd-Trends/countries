import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import PropTypes from "prop-types";

import { fetchBorderCountriesByAlphaCode } from "../../api";
import { getValuesFromNestedObjects } from "../../utils/getValuesFromNestedObjects";
import Button from "../Button";
import { IoIosArrowRoundBack } from "react-icons/io";

import S from "./CountryDetails.module.css";

const CountryDetails = ({ country }) => {
  const navigate = useNavigate();
  const [countryData, setCountryData] = useState({});
  const [borders, setBorders] = useState([]);
  const [borderCountries, setBorderCountries] = useState([]);
  const { data } = useSWR(
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
    };

    if (borders) {
      getBorderCountries();
    }
  }, [borders]);

  useEffect(() => {
    if (data) {
      console.log(data);
      setCountryData(data[0]);
      setBorders(data[0].borders);
    }
  }, [data]);

  const navigateBackwards = () => {
    navigate(-1, { replace: false });
  };

  return (
    <section className={S.container}>
      <Button onClick={navigateBackwards}>
        <IoIosArrowRoundBack />
        back
      </Button>
      <div className={S.country_details_wrapper}>
        <img className={S.country_image} src={countryData?.flags?.svg} alt="" />
        <div>
          <h1>{countryData?.name?.official}</h1>
          <div className={S.detail_group}>
            <div className={S.detail_group__sub_group}>
              <p>
                <strong>Native Name</strong>: {countryData?.name?.common}
              </p>
              {countryData?.population && (
                <p>
                  <strong>Pouplation</strong>:{" "}
                  {countryData?.population.toLocaleString()}
                </p>
              )}
              {countryData?.region && (
                <p>
                  <strong>Region</strong>: {countryData?.region}
                </p>
              )}
              {countryData?.subregion && (
                <p>
                  <strong>Sub Region</strong>: {countryData?.subregion}
                </p>
              )}
              {countryData?.capital && (
                <p>
                  <strong>Capital</strong>:{" "}
                  {countryData?.capital.toString().split(",")}
                </p>
              )}
            </div>
            <div className={S.detail_group__sub_group}>
              {countryData?.tld && (
                <p>
                  <strong>Top Level Domain</strong>:{" "}
                  {countryData?.tld.toString().split(" ")}
                </p>
              )}
              {countryData?.currencies && (
                <p>
                  <strong>Currencies</strong>:{" "}
                  {getValuesFromNestedObjects(countryData?.currencies).map(
                    (currency) => (
                      <span key={currency}>{currency}</span>
                    )
                  )}
                </p>
              )}
              {countryData?.languages && (
                <p>
                  <strong>Languages</strong>:{" "}
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
            <div className={S.border_countries}>
              <p>
                <strong>Border Countries: </strong>
              </p>

              <ul>
                {borderCountries.map((country) => (
                  <li key={country.name.common}>
                    <Button Tag={Link} to={`/country/${country.name.common}`}>
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

CountryDetails.propTypes = {
  country: PropTypes.string.isRequired,
};

export default CountryDetails;
