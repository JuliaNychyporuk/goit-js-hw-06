const elementToChange = document.querySelector('body')
const colorName = document.querySelector('.color')
const changeColorButton = document.querySelector('.change-color')

changeColorButton.addEventListener('click', onBodyChangeColorClick) 

function onBodyChangeColorClick (event) {
  let color = getRandomHexColor()
  elementToChange.style.backgroundColor = color
  colorName.textContent = color
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
