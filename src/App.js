import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RecipeId from "./components/RecipeId";
import CountryCategory from "./components/CountryCategory";
import SearchItems from "./components/SearchItems";

import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/:idMeal" element={<RecipeId />}></Route>
          <Route
            exact
            path="/Country/:name"
            element={<CountryCategory />}
          ></Route>
          <Route
            exact
            path="/search/:searchItem"
            element={<SearchItems />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
