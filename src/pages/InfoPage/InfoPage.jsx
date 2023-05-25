import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../redux/reducers/user";
//TanstackQuery
import { useQuery } from "@tanstack/react-query";
//Utils
import cocktailCarouselPhotos from "../../utils/get-photo-array";
//Components
import Carousel from "../../components/Carousel/Carousel";
import SmallCocktailCard from "../../components/SmallCocktailCard/SmallCocktailCard";
import ButtonComponent from "../../components/Button/ButtonComponent";
import ResultCard from "../../components/ResultCard/ResultCard";
//Emojis
const emoji = String.fromCodePoint(0x1f60a);

const InfoPage = () => {
  const dispatch = useDispatch();
  const { knownCocktails, unknownCocktails } = useSelector(
    (state) => state.users
  );

  async function getRandomCocktail() {
    try {
      const res = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
  async function refetchHandler(query, buttonValue) {
    await randomCocktailQuery.refetch();
    const { idDrink, strDrink } = query.data.drinks[0];

    if (buttonValue === "known") {
      dispatch(userActions.incrementKnownCocktails({ idDrink, strDrink }));
    } else {
      dispatch(userActions.incrementUnknownCocktails({ idDrink, strDrink }));
    }
  }
  const randomCocktailQuery = useQuery({
    queryKey: ["random-cocktail"],
    queryFn: getRandomCocktail,
  });

  return (
    <main className="flex flex-col items-center justify-center mt-16 ">
      <h2 className="text-2xl text-center mb-12">
        Welcome to{" "}
        <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 tracking-[.5rem]">
          MAKE COCKTAIL
        </span>{" "}
        website.
      </h2>

      <h3 className="text-md">
        You can learn how to make cocktail in this website.{" "}
      </h3>

      <Carousel photoArray={cocktailCarouselPhotos} />
      <p className="italic text-teal-900 mb-24">
        Only a few the cocktails you can learn to make !
      </p>

      <div className="flex">
        <ResultCard
          title={"Known Cocktails"}
          tableType={"known"}
          knownArray={knownCocktails}
          coctails={{
            result: knownCocktails.length,
            total: knownCocktails.length + unknownCocktails.length,
          }}
        />
        {randomCocktailQuery.data && (
          <SmallCocktailCard
            cocktail={randomCocktailQuery.data.drinks[0]}
            clickHandler={(buttonValue) => {
              refetchHandler(randomCocktailQuery, buttonValue);
            }}
          />
        )}

        <ResultCard
          title={"Unknown Cocktails"}
          unknownArray={unknownCocktails}
          coctails={{
            result: unknownCocktails.length,
            total: knownCocktails.length + unknownCocktails.length,
          }}
        />
      </div>

      <p> If you want you can filter cocktails here {emoji}</p>

      <div className="flex mt-6 mb-16">
        <Link>
          <ButtonComponent type={"green"}>Alcoholic</ButtonComponent>
        </Link>
        <Link>
          <ButtonComponent type={"red"} position="ml-4">
            Non-Alcoholic
          </ButtonComponent>
        </Link>
      </div>
    </main>
  );
};

export default InfoPage;
