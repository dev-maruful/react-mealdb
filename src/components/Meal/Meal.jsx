import React from "react";
import "./Meal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const Meal = (props) => {
  //   console.log(props.meal);
  const { idMeal, strMeal, strCategory, strArea, strMealThumb } = props.meal;
  return (
    <div className="meal">
      <div>
        <img src={strMealThumb} alt="" />
        <h4>ID: {idMeal}</h4>
        <h2>Name: {strMeal}</h2>
        <h3>Category: {strCategory}</h3>
        <button
          onClick={() => {
            props.setCart([...props.cart, props.meal]);
          }}
          className="add-to-cart"
        >
          Add to Cart <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </button>
      </div>
    </div>
  );
};

export default Meal;
