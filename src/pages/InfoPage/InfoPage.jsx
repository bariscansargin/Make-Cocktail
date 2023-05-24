import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
//Components
import Carousel from "../../components/Carousel/Carousel";
//Utils
import coctailCarouselPhotos from "../../utils/get-photo-array";
import { Link} from "react-router-dom";
//Emoji
const emoji = String.fromCodePoint(0x1f60a);

const InfoPage = () => {
  async function getImages() {
    try {
      const res = await axios.get();
    } catch (error) {
      console.error(error);
    }
  }
  async function getRandomCoctail() {
    try {
      const res = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      return res.data;
    } catch (error) {}
    console.error(error);
  }

  const randomCoctailQuery = useQuery({
    queryKey: ["random-coctail"],
    queryFn: getRandomCoctail,
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

      <Carousel photoArray={coctailCarouselPhotos} />
      <p className="italic text-teal-900 mb-24">
        Only a few the cocktails you can learn to make !
      </p>
      <p> If you want you can filter cocktails here {emoji}</p>
      <div className="flex">
        <Link className="m-8 border-solid bg-green-900 p-2 rounded-lg text-white">
          Alcoholic
        </Link>
        <Link className="m-8 border-solid bg-red-600 p-2 text-center rounded-lg text-white">
          Non-Alcoholic
        </Link>
      </div>
    </main>
  );
};

export default InfoPage;
