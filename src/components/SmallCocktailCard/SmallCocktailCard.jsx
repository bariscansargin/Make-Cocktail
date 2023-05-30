import React from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "../Button/ButtonComponent";


const SmallCocktailCard = ({ cocktail, clickHandler }) => {
  return (
    <div className="flex flex-col items-center justify-center shadow-lg border-solid rounded-xl mb-12 bg-[#B0DAB9] p-12 mx-12">
      <p className="mb-4"> Have you ever tried ? </p>
      <img
        className="w-64 h-64 rounded-2xl mb-4 "
        src={cocktail.strDrinkThumb}
        alt="cocktail-photo"
      />
      <p className="mb-4">
        {cocktail.strDrink}({cocktail.strAlcoholic})
      </p>
      <div className="flex mt-4 ">
        <Link>
          <ButtonComponent
            type={"green"}
            position={"w-12"}
            clickHandler={clickHandler}
            value={"known"}
          >
            &#x2713;
          </ButtonComponent>
        </Link>
        <Link>
          <ButtonComponent
            type={"red"}
            position={"ml-8  w-12 "}
            value={"unknown"}
            clickHandler={clickHandler}
          >
            &times;
          </ButtonComponent>
        </Link>
      </div>
    </div>
  );
};

export default SmallCocktailCard;
