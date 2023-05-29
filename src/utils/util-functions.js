export const useQueryParams = () => {
  const p = new URLSearchParams(location.search);
  const result = {};
  for (const param of p) {
    result[param[0]] = param[1];
  }

  return result;
};

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
