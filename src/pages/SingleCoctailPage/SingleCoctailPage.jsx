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
          <p className="mb-4 text-pink-700 text-2xl italic">
            {cocktailQueryById.data.drinks[0].strDrink}(
            {cocktailQueryById.data.drinks[0].strAlcoholic})
          </p>
          <img
            src={cocktailQueryById.data.drinks[0].strDrinkThumb}
            alt="cocktail-photo"
            className="w-64 h-64 rounded-xl mb-4 hover:animate-spin"
          />
          <p className="text-center text-xl text-pink-700 italic mb-4">
            {cocktailQueryById.data.drinks[0].strCategory}
          </p>
          <div className="flex items-center justify-center px-64 ">
            <p className="text-l text-pink-900 mb-4 text-center">
              {cocktailQueryById.data.drinks[0].strInstructions}
            </p>
          </div>

          <div className="flex flex-col items-center justify-around p-12 ">
            <div className="flex justify-between w-[500px] mb-4">
              <p className="bg-pink-700 opacity-1 text-white rounded-xl p-1.5">
                Ingredients
              </p>
              <p className="bg-pink-700 opacity-1 text-white rounded-xl p-1.5">
                Measures
              </p>
            </div>

            {findIngredients(cocktailQueryById.data.drinks[0]) &&
              findIngredients(cocktailQueryById.data.drinks[0]).map(
                (data, idx) => {
                  return (
                    <div className="flex justify-between w-[500px] " key={idx}>
                      <Link to={`/ingredients/${data.ingredient}`}>
                        <p className="text-lg ml-2 hover:text-pink-700">
                          {data.ingredient}
                        </p>
                      </Link>
                      <p className="italic text-lg mr-2">{data.measure}</p>
                    </div>
                  );
                }
              )}
          </div>
        </div>
      )}
    </main>
  );
};

export default SingleCoctailPage;
