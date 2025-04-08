import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Live" />
      <Button name="Song" />
      <Button name="News" />
      <Button name="Cricket" />
      <Button name="Soccer" />
      <Button name="Stockmarket" />
    </div>
  );
};

export default ButtonList;
