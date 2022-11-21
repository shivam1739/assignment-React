import React from "react";
import "./App.css";
import Chess from "./Burger/BurgerComponent/Chess/Chees";
import CreateBurger from "./Burger/CreateBurger";
import { BurgerComponentEnum } from "./resources";
function App() {
  return (
    <div className="body">
      <CreateBurger
        burgerStack={[
          BurgerComponentEnum.BREADUPPER,

          BurgerComponentEnum.CHEESE,
          BurgerComponentEnum.LETTUCE,
          BurgerComponentEnum.TOMATOES,
          BurgerComponentEnum.BREADLOWER,
        ]}
      />
    </div>
  );
}

export default App;
