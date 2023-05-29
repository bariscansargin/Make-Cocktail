import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useQueryParams } from "../../utils/util-functions";
//Utils
import { shuffleArray } from "../../utils/util-functions";

//Components
import ButtonComponent from "../../components/Button/ButtonComponent";
import CocktailLinkCard from "../../components/CocktailLink/CocktailLinkCard";

const CocktailsPage = () => {
  const { filter } = useQueryParams();

  const apiEndpoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${filter}`;

  const alcoholicReq = axios.get(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
  );
  const nonAlcoholicReq = axios.get(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
  );

  async function fetchCocktails() {
    if (filter) {
      const res = await axios.get(apiEndpoint);
      console.log("Filter var.");
      return res.data;
    }
    const res = await Promise.all([alcoholicReq, nonAlcoholicReq]);
    const cocktailsArr = [];
    if (res[0].status === 200 && res[1].status === 200) {
      res[0].data.drinks.map((alcoholicDrink) => {
        cocktailsArr.push(alcoholicDrink);
      });
      res[1].data.drinks.map((nonALcoholicDrink) => {
        cocktailsArr.push(nonALcoholicDrink);
      });

      return shuffleArray(cocktailsArr);
    }
  }
  function filterHandler(value) {
    console.log(value);
  }
  const cocktailsQuery = useQuery({
    queryKey: ["fetchCocktail", filter],
    queryFn: fetchCocktails,
  });

  return (
    <main className="flex flex-col p-24 items-center justify-center">
      {cocktailsQuery.isLoading && <h1>Loading...</h1>}
      <div className="flex items-center justify-center">
        <ButtonComponent
          value={"Alcoholic"}
          type={"green"}
          clickHandler={filterHandler}
        >
          Alcoholic
        </ButtonComponent>
        <ButtonComponent
          value={"Non_Alcoholic"}
          type={"red"}
          clickHandler={filterHandler}
          position={"ml-24"}
        >
          Non-Alcoholic
        </ButtonComponent>
      </div>

      <div className="flex flex-wrap p-12 items-center justify-center">
        {cocktailsQuery.data &&
          cocktailsQuery.data.map((cocktail, idx) => {
            return <CocktailLinkCard cocktail={cocktail} key={idx} />;
          })}
      </div>
    </main>
  );
};

export default CocktailsPage;
