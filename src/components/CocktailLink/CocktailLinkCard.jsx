import React from "react";
import { Link } from "react-router-dom";
import { truncatedText } from "../../utils/util-functions";

const CocktailLinkCard = ({ cocktail }) => {
  return (
    <Link
      to={`/cocktails/${cocktail.idDrink}`}
      className="flex flex-col bg-cyan-500 hover:bg-pink-300 hover:shadow-pink-300 hover:scale-110 transition duration-150  ease-in items-center justify-center w-48 h-128 mb-12 shadow-2xl shadow-cyan-500 rounded-lg md:mr-8"
    >
      <img src={cocktail.strDrinkThumb + "/preview"} className="rounded-t-lg" />
      <div className="p-5 h-28 flex justify-center items-center ">
        <h1 className="text-center text-white ">
          {cocktail.strDrink.length < 30
            ? cocktail.strDrink
            : truncatedText(cocktail.strDrink) + "..."}
        </h1>
      </div>
    </Link>
  );
};

export default CocktailLinkCard;
