import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import TrendSlider from "./TrendSlider";
import { useParams } from "react-router-dom";
import "../App.css";

const RecipeId = () => {
  const { idMeal } = useParams();
  // FETCH DATA FROM API
  const [data, setData] = useState([]);
  const [active, setActive] = useState("ingredient");

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const data = await api.json();

      //   console.log(data.meals);
      setData(data.meals[0]);
      console.log(data);
    };

    fetchData();
  }, [idMeal]);
  console.log(useParams());
  return (
    <>
      <Navbar />
      <div className="mealDetail">
        <h1>{data.strMeal}</h1>
        <div className="flex">
          <div className="img">
            <img src={data.strMealThumb} alt="" />
          </div>
          <div className="content">
            <button className="btn" onClick={() => setActive("ingredient")}>
              Ingredient
            </button>
            <button className="btn" onClick={() => setActive("instruction")}>
              Instruction
            </button>

            {active === "ingredient" ? (
              <div className="ingredient">
                <div>
                  <p>
                    {data.strIngredient1}-{data.strIngredient1}
                  </p>
                  <p>
                    {data.strIngredient2}-{data.strIngredient2}
                  </p>
                  <p>
                    {data.strIngredient3}-{data.strIngredient3}
                  </p>
                  <p>
                    {data.strIngredient4}-{data.strIngredient4}
                  </p>
                  <p>
                    {data.strIngredient5}-{data.strIngredient5}
                  </p>
                  <p>
                    {data.strIngredient6}-{data.strIngredient6}
                  </p>
                  <p>
                    {data.strIngredient7}-{data.strIngredient7}
                  </p>
                  <p>
                    {data.strIngredient8}-{data.strIngredient8}
                  </p>
                  <p>
                    {data.strIngredient9}-{data.strIngredient9}
                  </p>
                  <p>
                    {data.strIngredient10}-{data.strIngredient10}
                  </p>
                </div>
                <div>
                  <p>
                    {data.strIngredient11}-{data.strIngredient11}
                  </p>
                  <p>
                    {data.strIngredient12}-{data.strIngredient12}
                  </p>
                  <p>
                    {data.strIngredient13}-{data.strIngredient13}
                  </p>
                  <p>
                    {data.strIngredient14}-{data.strIngredient14}
                  </p>
                  <p>
                    {data.strIngredient15}-{data.strIngredient15}
                  </p>
                  <p>
                    {data.strIngredient16}-{data.strIngredient16}
                  </p>
                  <p>
                    {data.strIngredient17}-{data.strIngredient17}
                  </p>
                  <p>
                    {data.strIngredient18}-{data.strIngredient18}
                  </p>
                  <p>
                    {data.strIngredient19}-{data.strIngredient19}
                  </p>
                  <p>
                    {data.strIngredient20}-{data.strIngredient20}
                  </p>
                </div>
              </div>
            ) : (
              <p id="instruction">{data.strInstructions}</p>
            )}
          </div>
        </div>
      </div>

      <TrendSlider />
    </>
  );
};

export default RecipeId;
