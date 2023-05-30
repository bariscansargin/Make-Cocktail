import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
//Utils
import { isAlcoholic } from "../../utils/util-functions";
import { truncatedParagraph } from "../../utils/util-functions";
import CocktailLinkCard from "../../components/CocktailLink/CocktailLinkCard";
import { hasDescription } from "../../utils/util-functions";

//Components

const SingleIngredientPage = () => {
  const { ingredientName } = useParams();
  const [allParagraph, setAllParagraph] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const ingredientReq = axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredientName}`
  );
  const ingredientFilterReq = axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientName}`
  );
  async function fetchSingleIngredient() {
    try {
      let arr = [];
      const res = await Promise.all([ingredientReq, ingredientFilterReq]);

      const ingredientData = res[0].data.ingredients[0];
      const filteredCocktails = res[1].data.drinks;
      arr = [ingredientData, filteredCocktails];
      return arr;
    } catch (error) {
      console.log(error);
    }
  }
  function toggleParagraphHandler(e) {
    const { value } = e.target.dataset;
    if (value === "more") {
      setAllParagraph(true);
      return;
    }
    setAllParagraph(false);
  }

  const fetchIngredient = useQuery({
    queryKey: ["singleIngredients"],
    queryFn: fetchSingleIngredient,
  });
  return (
    <main className="flex-grow flex flex-col justify-center mt-12">
      <div>{fetchIngredient.isLoading && <p>Loading...</p>}</div>

      {fetchIngredient.data && (
        <div className="flex flex-col items-center justify-center">
          <p className=" font-bold italic font-xl text-pink-500 text-2xl mb-12">
            {fetchIngredient.data[0].strIngredient
              ? fetchIngredient.data[0].strIngredient
              : ""}{" "}
            ({isAlcoholic(fetchIngredient.data[0].strAlcohol)})
          </p>
          <img
            src={`https://www.thecocktaildb.com/images/ingredients/${fetchIngredient.data[0].strIngredient}-Medium.png`}
            alt="ingredient-img"
            className="w-48 h-48"
          />
          <div className="p-16">
            {hasDescription(
              fetchIngredient.data[0].strDescription,
              allParagraph
            )}
            {fetchIngredient.data[0].strDescription && (
              <>
                {allParagraph ? (
                  <span
                    className="text-bold italic text-pink-600 hover:text-pink-400 cursor-pointer"
                    data-value="less"
                    onClick={toggleParagraphHandler}
                  >
                    ...Less
                  </span>
                ) : (
                  <span
                    className="text-bold italic text-pink-600 hover:text-pink-400 cursor-pointer"
                    data-value="more"
                    onClick={toggleParagraphHandler}
                  >
                    ...More
                  </span>
                )}
              </>
            )}

            {/* {
            allParagraph
              ? fetchIngredient.data[0].strDescription
              : truncatedParagraph(fetchIngredient.data[0].strDescription) +
                " " }

            {fetchIngredient.data[0].strDescription && allParagraph ? (
              <span
                className="text-bold italic text-pink-600 hover:text-pink-400 cursor-pointer"
                data-value="less"
                onClick={toggleParagraphHandler}
              >
                ...Less
              </span>
            ) : (
              <span
                className="text-bold italic text-pink-600 hover:text-pink-400 cursor-pointer"
                data-value="more"
                onClick={toggleParagraphHandler}
              >
                ...More
              </span>
            )} */}
          </div>
        </div>
      )}
      <div className="mt-4 flex-col  justify-center items-center">
        <p className="text-center mb-12 font-bold font-xl italic text-pink-500">{`Cocktails made with ==> ${ingredientName}`}</p>
        <div className="flex flex-wrap justify-center items-center">
          {fetchIngredient.data &&
            fetchIngredient.data[1] &&
            fetchIngredient.data[1].map((cocktail, idx) => {
              return <CocktailLinkCard cocktail={cocktail} key={idx} />;
            })}
        </div>
      </div>
    </main>
  );
};

export default SingleIngredientPage;
