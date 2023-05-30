import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const SingleCoctailPage = () => {
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
      if (key.includes("strIngredient") && data[key]) {
        const index = key.split("strIngredient")[1];
        acc.push({
          ingredient: data[key],
          measure: data[`strMeasure${index}`],
        });
      }
      return acc;
    }, []);
    return ingredients;
  }

  const cocktailQueryById = useQuery({
    queryKey: ["cocktailById"],
    queryFn: fetchCocktailById,
  });
  return (
    <main className="flex flex-grow flex-col items-center justify-center text-center mt-4">
      {cocktailQueryById.isLoading && <p className="text-center">Loading...</p>}
      {cocktailQueryById.data && (
        <div className="flex flex-col items-center justify-center">
          <p className="text-pink-700 text-2xl italic text-center w-1/2">
            {cocktailQueryById.data.drinks[0].strDrink}
          </p>
          <p className="mb-6 text-pink-700 text-2xl italic text-center">
            ({cocktailQueryById.data.drinks[0].strAlcoholic})
          </p>
          <img
            src={cocktailQueryById.data.drinks[0].strDrinkThumb}
            alt="cocktail-photo"
            className="w-64 h-64 rounded-xl mb-4 hover:animate-spin"
          />
          <p className="text-center text-xl text-pink-700 italic mb-4">
            {cocktailQueryById.data.drinks[0].strCategory}
          </p>
          <p className="text-l text-pink-900 mb-4 p-2 text-start">
            {cocktailQueryById.data.drinks[0].strInstructions}
          </p>
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-start flex-col">
              <p className="bg-pink-700 text-white rounded-xl p-2 mb-4">
                Ingredients
              </p>
              <div className="flex flex-col items-start">
                {findIngredients(cocktailQueryById.data.drinks[0]) &&
                  findIngredients(cocktailQueryById.data.drinks[0]).map(
                    (data, idx) => {
                      return (
                        <Link to={`/ingredients/${data.ingredient}`} key={idx}>
                          <p className="text-md hover:text-pink-700">
                            - {data.ingredient}
                          </p>
                        </Link>
                      );
                    }
                  )}
              </div>
            </div>
            <div className="flex items-start flex-col ml-4 md:ml-32 lg:ml-64">
              <p className="bg-pink-700 text-white rounded-xl p-2 mb-4">
                Measures
              </p>
              <div className="flex flex-col items-start">
                {findIngredients(cocktailQueryById.data.drinks[0]) &&
                  findIngredients(cocktailQueryById.data.drinks[0]).map(
                    (data, idx) => {
                      return (
                        <p key={idx}>
                          <p className="text-md">- {data.measure}</p>
                        </p>
                      );
                    }
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default SingleCoctailPage;
