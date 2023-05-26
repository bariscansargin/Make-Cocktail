import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
const SingleIngredientPage = () => {
  const { ingredientName } = useParams();

  const apiEndpoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredientName}`;
  async function fetchSingleIngredient() {
    try {
      const res = await axios.get(apiEndpoint);
      console.log(res)
    } catch (error) {}
  }

  const fetchIngredient = useQuery({
    queryKey: ["singleIngredients"],
    queryFn: fetchSingleIngredient,
  });
  return <div>SingleIngredientPage</div>;
};

export default SingleIngredientPage;
