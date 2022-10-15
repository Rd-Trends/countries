// import { countryName } from "../interfaces";

export const getValuesFromNestedObjects = (obj: any) => {
  const arr: any[] = [];
  const keys = Array.from(Object.keys(obj));
  keys.map((key) =>
    typeof obj[key] === 'object' && obj[key] !== null ?
      arr.push(obj[key].name) :
      arr.push(obj[key]),
  );
  return arr;
};
