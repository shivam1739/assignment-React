import React from "react";
import BreadUpper from "./BurgerComponent/BreadUpper/BreadUpper";
import BreadLower from "./BurgerComponent/BreadLower/BreadLower";
import Lettuce from "./BurgerComponent/Lettuce/Lettuce";
import Chess from "./BurgerComponent/Chess/Chees";
import Tomato from "./BurgerComponent/Tomatoes/Tomato";
import { BurgerComponentEnum } from "../resources";

function CreateBurger(props) {
  const BurgerStack = props.burgerStack.map((items, index) => {
    switch (items) {
      case BurgerComponentEnum.CHEESE:
        return <Chess />;
      case BurgerComponentEnum.LETTUCE:
        return <Lettuce />;
      case BurgerComponentEnum.TOMATOES:
        return <Tomato />;
      default:
        return null;
    }
  });

  return (
    <div
      style={{
        padding: "9%",
        height: "90vh",
        width: "50vw",
        marginTop: "10vh",
      }}
    >
      <BreadUpper />
      {BurgerStack}
      <BreadLower />
    </div>
  );
}

export default CreateBurger;
