import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useQueryParams } from "../../utils/util-functions";
import { useNavigate } from "react-router-dom";
//Utils
import { shuffleArray } from "../../utils/util-functions";

//Components
import ButtonComponent from "../../components/Button/ButtonComponent";
import CocktailLinkCard from "../../components/CocktailLink/CocktailLinkCard";

const CocktailsPage = () => {
  const navigate = useNavigate();
  const { filter } = useQueryParams();

  const apiEndpoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${filter}`;

  const alcoholicReq = axios.get(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
  );
  const nonAlcoholicReq = axios.get(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function fetchCocktails() {
    if (filter) {
      const res = await axios.get(apiEndpoint);
      infoMessage = `${filter} cocktails.`;
      return res.data.drinks;
    }
    const res = await Promise.all([alcoholicReq, nonAlcoholicReq]);
    let cocktailsArr = [];
    if (res[0].status === 200 && res[1].status === 200) {
      res[0].data.drinks.map((alcoholicDrink) => {
        cocktailsArr = [...cocktailsArr, alcoholicDrink];
      });
      res[1].data.drinks.map((nonALcoholicDrink) => {
        cocktailsArr = [...cocktailsArr, nonALcoholicDrink];
      });

      return shuffleArray(cocktailsArr);
    }
  }
  function filterHandler(value) {
    if (value !== "all") {
      navigate(`/cocktails?filter=${value}`);
    } else {
      navigate("/cocktails");
    }
  }
  let infoMessage = "All Cocktails";
  if (filter === "Non_Alcoholic") {
    infoMessage = "Non Alcoholic Cocktails";
  }
  if (filter === "Alcoholic") {
    infoMessage = "Alcoholic Cocktails";
  }

  const cocktailsQuery = useQuery({
    queryKey: ["fetchCocktail", filter],
    queryFn: fetchCocktails,
  });

  return (
    <main className="flex flex-grow flex-col p-8 items-center justify-center">
      <div className="flex items-center justify-center flex-col md:flex-row">
        <ButtonComponent
          value={"Alcoholic"}
          type={"green"}
          clickHandler={filterHandler}
          position={"mb-4 mr-4"}
        >
          Alcoholic
        </ButtonComponent>
        <ButtonComponent
          value={"Non_Alcoholic"}
          type={"red"}
          clickHandler={filterHandler}
          position={"mb-4 mr-4"}
        >
          Non-Alcoholic
        </ButtonComponent>
        <ButtonComponent
          clickHandler={filterHandler}
          value={"all"}
          type={"cyan"}
          position={"mb-4 mr-4"}
        >
          See All
        </ButtonComponent>
      </div>

      <h1 className="mt-8 font-bold italic text-pink-600 mb-8 ">
        {infoMessage}
      </h1>
      {cocktailsQuery.isLoading && (
        <div class="items-center justify-center rounded-full w-14 h-14 bg-gradient-to-tr from-cyan-500 to-pink-500">
          <div class="h-9 w-9 rounded-full bg-gray-200"></div>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-center">
        {cocktailsQuery.data &&
          cocktailsQuery.data.map((cocktail, idx) => {
            return <CocktailLinkCard cocktail={cocktail} key={idx} />;
          })}
      </div>
    </main>
  );
};

export default CocktailsPage;
