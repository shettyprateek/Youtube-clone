import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-4 bg-gray-100 rounded-lg py-2 m-2 whitespace-nowrap">
      {name}
    </button>
  );
};

export default Button;
