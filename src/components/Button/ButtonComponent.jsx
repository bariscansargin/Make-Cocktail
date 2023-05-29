import React from "react";
import cn from "classnames";

const ButtonComponent = ({ children, type, value, position, clickHandler }) => {
  const buttonClasses = cn(
    "border-solid p-2 rounded-lg text-white " + position,
    {
      "bg-green-900 hover:bg-green-800": type === "green",
      "bg-red-600 hover:bg-red-500": type === "red",
    }
  );

  return (
    <button
      className={buttonClasses}
      onClick={(e) => {
        e.preventDefault();
        clickHandler(value);
      }}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
