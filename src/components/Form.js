import React from 'react';

const Form = props => (
  <form onSubmit={props.getRecipe} style={{ marginBottom:"2rem" }}>
    <input className="form__input" type="text" name="recipeName" placeholder="Search for a recipe" />
    <button className="form__button">
      <span>&#128269;</span>
    Search</button>
  </form>
);

export default Form;