

const inputBlock = document.querySelector("#validation-input")
const inputValidSymbolLength = inputBlock.getAttribute("data-length")
console.log(inputValidSymbolLength)

inputBlock.addEventListener("blur", onValidationCheckInput)

function onValidationCheckInput (event) {

    if(event.currentTarget.value.length === parseInt(inputValidSymbolLength)) {
    inputBlock.classList.contains('invalid') ?
    inputBlock.classList.replace('invalid', 'valid')
    : inputBlock.classList.add('valid')
    } else {
    inputBlock.classList.contains('valid') ?
    inputBlock.classList.replace('valid', 'invalid')
    : inputBlock.classList.add('invalid')
    }   

}