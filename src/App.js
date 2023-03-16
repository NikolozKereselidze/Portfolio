import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import Work from "./components/Work/Work";

const App = () => {
  return (
    <BrowserRouter>
      <Home />
      <Work />
    </BrowserRouter>
  );
};

export default App;
