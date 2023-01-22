const inputBlock = document.querySelector('#name-input')
console.log(inputBlock)
const userName = document.querySelector('#name-output')
console.log(userName)

inputBlock.addEventListener('input', onChangeNameInput)

function onChangeNameInput (event) {
    event.currentTarget.value === "" 
    ? userName.textContent = "Anonymous" 
    : userName.textContent = event.currentTarget.value
}