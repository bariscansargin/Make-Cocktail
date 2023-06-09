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

export const truncatedText = (str) => {
  return str.substring(0, 30);
};

export const truncatedParagraph = (str) => {
  return str.substring(0, 615);
};

export const isAlcoholic = (str) => {
  if (str === "Yes") {
    return "Alcoholic";
  }
  return "Non Alcoholic";
};

export const hasDescription = (description, state) => {
  if (description) {
    return state ? description : truncatedParagraph(description) + " ";
  }
  return <p className="text-xl text-red-800 italic">No description.</p>
};

