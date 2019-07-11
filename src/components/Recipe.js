import React from 'react';

import { Link } from "react-router-dom";

const config = require('../config/site');

const API_KEY = config.APP_KEY; // 'd7a8cdde9f02265ddde5d843d6f65914'; //
// const API_KEY2 = config.APP_KEY2;
// console.log(API_KEY);

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  }
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);

    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
    console.log(this.state.activeRecipe);
  }
  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <div className="container">

          { this.state.activeRecipe.length !== 0 &&
            <a className="active-recipe" href={recipe.source_url}>
              <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
              <h3 className="active-recipe__title">{ recipe.title }</h3>
              <p className="active-recipe__website">View Recipe on:
                <button className="active-recipe__button" > {recipe.publisher} </button>
              </p>
              <h4 className="active-recipe__publisher">
                Publisher: <span>{ recipe.publisher }</span>
              </h4>
            </a>
          }
          {this.state.activeRecipe.length === 0 &&
            <h4 className="preloading">loading your recipe...</h4>
          }

          <Link className="back-recipe__button" to="/">  <span>&#8656;</span> Go Back</Link>
        </div>
      </div>
    );
  }
};

export default Recipe;