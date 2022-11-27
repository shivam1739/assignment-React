import React from "react";
import "./App.css";
import TicTacToe from "./components/TicTacToe/TicTacToe";

function App() {
  let obj = {
    name: "shivam",
    age: 16,
  };
  return (
    <div className="body">
      <TicTacToe />
    </div>
  );
}

export default App;
