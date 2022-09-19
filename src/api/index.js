import {sortAlphabetically} from '../utils/SsortAlphabetically';

const baseURL = 'https://restcountries.com/v3.1';

export const fetchCountries = async () => {
  try {
    const response = await fetch(
        `${baseURL}/all?fields=name,population,region,capital,flags`,
    );
    const data = await response.json();
    return sortAlphabetically(data);
  } catch (e) {
    throw new Error('unable to fetch countries');
  }
};

export const fetchCountriesByRegion = async (region) => {
  try {
    const response = await fetch(
        `${baseURL}/region/${region}?fields=name,population,region,capital,flags`,
    );
    const data = await response.json();
    return sortAlphabetically(data);
  } catch (e) {
    throw new Error('unable to fetch countries');
  }
};

export const fetchCountriesByName = async (name, region) => {
  try {
    const response = await fetch(
        `${baseURL}/name/${name}?fields=name,population,region,capital,flags,subregion,languages,currencies,tld,borders`,
    );
    const data = await response.json();
    return region ?
      sortAlphabetically(
          data.filter((country) => country.region.includes(region)),
      ) :
      sortAlphabetically(data);
  } catch (e) {
    throw new Error('unable to fetch countries by name');
  }
};

export const fetchBorderCountriesByAlphaCode = async (borders) => {
  try {
    const borderCountries = await Promise.all(
        borders.map(async (border) => {
          const response = await fetch(`${baseURL}/alpha/${border}?fields=name`);
          return await response.json();
        }),
    );

    return borderCountries;
  } catch (e) {
    throw new Error('unable to fetch country by code');
  }
};
