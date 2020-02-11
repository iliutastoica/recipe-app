import React, { Component } from 'react';
import './App.css';

import Form from "./components/Form";
import Recipes from "./components/Recipes";

const config = require('./config/site');

const API_KEY = config.APP_KEY; // 'd7a8cdde9f02265ddde5d843d6f65914'; //
// const API_KEY2 = config.APP_KEY2;
// console.log(API_KEY);
 //api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=chicken

class App extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.edamam.com/search?app_id=900da95e&app_key=${API_KEY}&q=${recipeName}`).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ', error.message);
    });
    // https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=

    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }
  render() {
    const recipes = this.state.recipes;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={recipes} />
      </div>
    );
  }
}

export default App;