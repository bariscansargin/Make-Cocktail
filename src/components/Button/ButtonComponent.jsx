import React from "react";
import cn from "classnames";

const ButtonComponent = ({ children, type, props, position }) => {
  const buttonClasses = cn(
    "border-solid p-2 rounded-lg text-white " + position,
    {
      "bg-green-900 hover:bg-green-800": type === "green",
      "bg-red-600 hover:bg-red-500": type === "red",
    }
  );
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default ButtonComponent;
