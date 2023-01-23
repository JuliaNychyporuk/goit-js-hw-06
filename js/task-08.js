const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()
    
    const {
        elements: { email, password },
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        const message = 'Будь ласка, заповніть усі поля форми!'
        return alert(message)
    }
    const inputDataFormArray = { Email: email.value, Password: password.value }
    
    console.log(inputDataFormArray)
    event.currentTarget.reset()
}
