import React from "react";
import Button from "./Button";

const ButtonContainer = () => {
  const buttonList = [
    "All",
    "Live",
    "Gaming",
    "Music",
    "Podcasts",
    "Football",
    "Chess",
    "Magnus Carlsen",
    "Tennis",
    "Cricket",
    "Anime",
    "Elden Ring",
  ];
  return (
    <div className="whitespace-nowrap overflow-x-scroll">
      <div className="inline-block">
        {buttonList.map((name, index) => (
          <Button key={index} name={name} />
        ))}
      </div>
    </div>
  );
};

export default ButtonContainer;
