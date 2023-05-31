import React from "react";
import CardWrapper from "../CardWrapper/CardWrapper";
import { Link } from "react-router-dom";

function arraySelector(tableType, knownArray, unknownArray) {
  if (tableType === "known") {
    return knownArray.map((cocktail, idx) => {
      return <li key={idx}> {cocktail.strDrink} / &#x2713;</li>;
    });
  }
  return unknownArray.map((cocktail, idx) => {
    return (
      <li key={idx} className="hover:text-red-400 hover:scale-75">
        <Link to={`/cocktails/${cocktail.idDrink}`}>{cocktail.strDrink}</Link>
      </li>
    );
  });
}
const ResultCard = ({
  title,
  knownArray,
  unknownArray,
  coctails,
  tableType,
}) => {
  return (
    <CardWrapper>
      <div className="flex flex-col scrollbar items-center">
        <p className="text-center">{title}</p>
        <p className="text-center">
          {coctails.result}/{coctails.total}
        </p>
      </div>
      <ul className="flex flex-col h-auto overflow-auto">
        {arraySelector(tableType, knownArray, unknownArray)}
      </ul>
    </CardWrapper>
  );
};

export default ResultCard;
