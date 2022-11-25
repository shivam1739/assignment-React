import React from "react";
import "./App.css";
import Container from "./Container";

function App() {
  let obj = {
    name: "shivam",
    age: 16,
  };
  return (
    <div className="body">
      <Container />
      {/* <New /> */}
    </div>
  );
}

export default App;
