import React from 'react';

import { Link } from "react-router-dom";

const Recipes = props => (
  <div className="container">
    <div className="row">
    { props.recipes && props.recipes.map((recipe) => {
      return (
        <div key={recipe.title} className="col-md-4" style={{ marginBottom:"2rem" }}>
          <div className="recipes__box">
            <Link className="recipe__link" to={{
                  pathname: `/recipe/${recipe.recipe_id}`,
                  state: { recipe: recipe.title }
                }}>
              <img className="recipe__box-img" src={recipe.image_url} alt={recipe.title}/>
              <div className="recipe__text">
                <h5 className="recipes__title">
                  { recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...` }
                </h5>
                <p className="recipes__subtitle">Publisher: <span>
                  { recipe.publisher }
                </span></p>
              </div>
              <button className="recipe_buttons">
                View Recipe
              </button>
            </Link>
          </div>
        </div>
      );
    })}
    {!props.recipes &&
    <div className="col-md-12 norecipes">no recipes loaded</div>
    }
    </div>
  </div>
);

export default Recipes;