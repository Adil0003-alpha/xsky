import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import TrendSlider from "./TrendSlider";
import { Link, useParams } from "react-router-dom";

const SearchItems = () => {
  const { searchItem } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`
      );
      const data = await api.json();

      //   console.log(data.meals);
      setData(data.meals);
      console.log(data);
    };

    fetchData();
  }, [searchItem]);

  return (
    <>
      <Navbar />
      <div className="country-category">
        {data.map((d) => {
          return (
            <Link to={`/${d.idMeal}`} key={d.idMeal} className="link">
              <div className="country-category-content">
                <div className="cont-cate-img">
                  <img src={d.strMealThumb} alt="" />
                </div>
                <h3>{d.strMeal}</h3>
              </div>
            </Link>
          );
        })}
      </div>
      <TrendSlider />
    </>
  );
};

export default SearchItems;
