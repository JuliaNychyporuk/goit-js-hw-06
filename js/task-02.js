const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients')


const makeIngredientItems = ingredients.map((ingredient) => {
const ingredientItemEl = document.createElement('li')
ingredientItemEl.classList.add('item')
ingredientItemEl.textContent = `${ingredient}`
return ingredientItemEl
})
ingredientsListEl.append(...makeIngredientItems)

console.log(ingredientsListEl)