const valueEl = document.querySelector("#value");
let counterValue = 0;
const onIncrementButtonClick = document.querySelector('[data-action = "increment"]')
const onDecrementButtonClick = document.querySelector('[data-action = "decrement"]')

function incrementClick () {
    updateCounterValue(counterValue += 1)
}

function decrementClick () {
    updateCounterValue(counterValue -= 1)
}

function updateCounterValue () {
    valueEl.textContent = counterValue
}

onIncrementButtonClick.addEventListener('click', incrementClick)
onDecrementButtonClick.addEventListener('click', decrementClick)

