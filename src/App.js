import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

export default App;
