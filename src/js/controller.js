//
//

import * as model from './model';
import recipeView from './views/recipeView.js';

// import icons from 'url:../img/icons.svg';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

console.log(123);

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // Loading Recipe
    await model.loadRecipe(id);

    // Rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

['hashchange', 'load'].forEach(event => {
  window.addEventListener(event, controlRecipes);
});

// window.addEventListener('hashchange', showRecipe);
