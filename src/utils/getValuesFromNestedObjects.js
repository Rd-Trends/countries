export const getValuesFromNestedObjects = (obj) => {
  const arr = [];
  const keys = Array.from(Object.keys(obj));
  keys.map((key) =>
    typeof obj[key] === 'object' && obj[key] !== null ?
      arr.push(obj[key].name) :
      arr.push(obj[key]),
  );
  return arr;
};
