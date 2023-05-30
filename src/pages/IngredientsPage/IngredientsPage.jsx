import React, { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
//Components
import ButtonComponent from "../../components/Button/ButtonComponent";
const IngredientsPage = () => {
  const inputRef = useRef();

  async function fetchIngredient() {
    const res = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${inputRef.current.value}`
    );

    return res.data.ingredients;
  }

  function refetchHandler() {
    ingredientData.refetch();
  }
  const ingredientData = useQuery({
    queryKey: ["fetchIngredient"],
    queryFn: fetchIngredient,
  });
  return (
    <main className="flex flex-grow flex-col  items-center">
      <div>
        <input
          type="text"
          ref={inputRef}
          className="shadow-xl mt-16 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search ingredient."
        />
        <ButtonComponent
          type={"search"}
          position={"ml-4"}
          clickHandler={refetchHandler}
        >
          Search
        </ButtonComponent>
      </div>
      <div>
        {ingredientData.isLoading && (
          <p className="text-cyan-500">Loading...</p>
        )}
      </div>
      <div className="flex flex-col justify-center items-center">
        {ingredientData.data && ingredientData.data[0] && (
          <div className="bg-[#B0DAB9] rounded-lg p-4 shadow-lg flex flex-col justify-center items-center my-12">
            <img
              src={`https://www.thecocktaildb.com/images/ingredients/${ingredientData.data[0].strIngredient}-Medium.png`}
              alt="ingredient-img"
              className="w-48 h-48 mb-4 "
            />
            <div>
              <p className="italic font-bold ">
                {ingredientData.data[0].strIngredient}
                {ingredientData.data[0].strAlcohol === "Yes"
                  ? "(Alcohol)"
                  : "(Non Alcohol)"}
              </p>
            </div>
          </div>
        )}
        {ingredientData.data && ingredientData.data[0] && (
          <div>
            <Link to={`/ingredients/${ingredientData.data[0].strIngredient}`} className="text-pink-600 italic font-bold">
              You can see everything about{" "}
              {ingredientData.data[0].strIngredient} by clicking here
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default IngredientsPage;
