import { countryDetails } from '../interfaces';

export const sortAlphabetically = (arr: countryDetails[]) => {
  return arr.sort(function (a, b) {
    return a.name.official.localeCompare(b.name.official);
  });
};
