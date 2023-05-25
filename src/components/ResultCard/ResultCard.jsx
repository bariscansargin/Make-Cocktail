import React from "react";
import CardWrapper from "../CardWrapper/CardWrapper";

function arraySelector(tableType, knownArray, unknownArray) {
  if (tableType === "known") {
    return knownArray.map((cocktail, idx) => {
      return <li key={idx}> {cocktail.strDrink} / &#x2713;</li>;
    });
  }
  return unknownArray.map((cocktail, idx) => {
    return <li key={idx}>{cocktail.strDrink}</li>;
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
      <div className="flex flex-col scrollbar">
        <p>{title}</p>
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
