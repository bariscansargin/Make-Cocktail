import React, { useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const SingleCoctailPage = () => {
  const { cocktailId } = useParams();
  const apiEndpoint = `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`;

  async function fetchCocktailById() {
    try {
      const res = await fetch(apiEndpoint);
      console.log(res.url);
    } catch (error) {
      console.error(error);
    }
  }

  const cocktailQueryById = useQuery({
    queryKey: ["cocktailById"],
    queryFn: fetchCocktailById,
  });
  return <main>{console.log(cocktailQueryById)}</main>;
};

export default SingleCoctailPage;
