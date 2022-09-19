export const sortAlphabetically = (arr) => {
  return arr.sort(function(a, b) {
    return a.name.official.localeCompare(b.name.official);
  });
};
