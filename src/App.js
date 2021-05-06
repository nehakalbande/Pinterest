import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="app">
      <Header loading={true} />
      <Body />
    </div>
  );
}

export default App;
