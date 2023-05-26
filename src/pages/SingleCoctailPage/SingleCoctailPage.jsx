import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const SingleCoctailPage = () => {
  const [ingredients, setIngredients] = useState([]);
  const { cocktailId } = useParams();
  async function fetchCocktailById() {
    try {
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
      );
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }

  function findIngredients(data) {
    const ingredients = Object.keys(data).reduce((acc, key) => {
      if (key.includes('strIngredient') && data[key]) {
          const index = key.split('strIngredient')[1];
          acc.push({
              ingredient: data[key],
              measure: data[`strMeasure${index}`],
          });
      }
      return acc;
  }, [])
    return ingredients; 
  }

  const cocktailQueryById = useQuery({
    queryKey: ["cocktailById"],
    queryFn: fetchCocktailById,
  });
  return (
    <main>
      {console.log(cocktailQueryById)}
      {cocktailQueryById.isLoading && <p className="text-center">Loading...</p>}
      {cocktailQueryById.data && (
        <div>
          <p>{cocktailQueryById.data.drinks[0].strDrink}</p>
          <img
            src={cocktailQueryById.data.drinks[0].strDrinkThumb}
            alt="cocktail-photo"
          />
          <p>{cocktailQueryById.data.drinks[0].strCategory}</p>

          <p>{cocktailQueryById.data.drinks[0].strInstructions}</p>
          {console.log(findIngredients(cocktailQueryById.data.drinks[0]))}
        </div>
      )}
    </main>
  );
};

export default SingleCoctailPage;
