import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "../App.css";

const PopularSlider = () => {
  // FETCH DATA FROM API
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s"
      );
      const data = await api.json();

      // console.log(data.meals);
      setData(data.meals);
    };

    fetchData();
  }, []);

  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {data.map((d) => {
            return (
              <Link to={`/${d.idMeal}`} key={d.idMeal}>
                <div className="slider">
                  <img src={d.strMealThumb} alt="" />
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default PopularSlider;
