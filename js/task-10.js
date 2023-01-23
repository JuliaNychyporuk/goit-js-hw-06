const numberInputValue = document.querySelector('[type="number"]')
const createButton = document.querySelector("[data-create]")
const destroyButton = document.querySelector("[data-destroy]")
const divBoxesContainer = document.querySelector('#boxes')

createButton.addEventListener('click', createBoxesButton)
destroyButton.addEventListener('click', destroyBoxes)

function createBoxesButton () {
  let divBoxesSet = createBoxes(numberInputValue.value)
  divBoxesContainer.append(...divBoxesSet)
}

function createBoxes(amount) {
  let divBoxes = []

  for (let i = 0; i <= (amount - 1); i += 1) {
  let div = document.createElement('div')
  div.style.height = `${30 + 10 * i}px`
	div.style.width = `${30 + 10 * i}px`
  div.style.backgroundColor = getRandomHexColor() 
  divBoxes.push(div)
}
  return divBoxes
}

function destroyBoxes(event) {
  divBoxesContainer.innerHTML = ''
  numberInputValue.value = ''
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}