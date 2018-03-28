import _ from 'lodash';
import React from 'react';

export function formatIngredientList(ingredients, cocktailIngredients, clickFunction) {
  let ingredient = null;
  let formattedIngredients = [];

  const listStyle = {
    listStyleType: 'none',
    padding: '5px 0'
  }

  _.forEach(cocktailIngredients, function(cocktailIngredient, index) {
    ingredient = _.find(ingredients, {
      ingredientId: cocktailIngredient.ingredientId
    })

    const ingredientBuffer = _.cloneDeep(ingredient);

    formattedIngredients.push(
      <li key={ingredientBuffer.ingredientId}
        style={listStyle}
        className={ingredientBuffer.selected ? 'bold hover-underline' : 'hover-underline'}
        onClick={!_.isUndefined(clickFunction) ? (e) => clickFunction(_.cloneDeep(ingredientBuffer)) : null}
      >
          {
            cocktailIngredient.amount
              ? <span> {cocktailIngredient.amount} - </span>
              : ""
          }
          <span> {ingredientBuffer.name} </span>
      </li>
    )
  });

  return formattedIngredients;
}

export function formatWikipediaLink(name) {
  const wikipediaLink = "https://www.wikipedia.org/wiki/"

  return wikipediaLink + name.split(' ').map((name) => name.charAt(0).toUpperCase() + name.slice(1)).join('_')
}
