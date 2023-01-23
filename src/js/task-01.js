const categoriesList = document.querySelector('#categories')
const listItemsAmount = categoriesList.children.length;
console.log(`Number of categories: ${listItemsAmount}`)

const titles = document.querySelectorAll('h2')
for (let i = 0; i < titles.length; i += 1) { 
const title = titles[i].textContent; 
const itemsAmount = titles[i].nextElementSibling.children.length;

console.log(`Category: ${title}
Elements: ${itemsAmount}`);
}