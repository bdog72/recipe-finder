//
//

import * as model from './model';
import recipeView from './views/recipeView';

// import icons from 'url:../img/icons.svg';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
1;
console.log(1);
console.log('B');

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
    recipeView.renderError();
    // recipeView.renderError(`${err} 👽👽 Bozo Boy`);
  }
};

const init = function () {
  recipeView.addHadlerRender(controlRecipes);
};

init();
