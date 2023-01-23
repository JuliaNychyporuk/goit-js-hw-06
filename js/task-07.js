const fontSizeControlSlider = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

fontSizeControlSlider.addEventListener('input', onSizeControlInput)

function onSizeControlInput (event) {
let currentSizeInput = event.currentTarget.value
text.style.fontSize = `${currentSizeInput}px`
}
