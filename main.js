const inputStepValue = document.querySelector('#step')
const axis = document.querySelector('.axis')
const selectedStep = document.querySelector('.selected-step')
const msgError = document.querySelector('.notification.error')
const form = document.querySelector('form')

updateSelectedStep(selectedStep, axis)

inputStepValue.addEventListener('input', errorMsgHide)
form.addEventListener('submit', btnSetClickHandler)



function btnSetClickHandler(e) {
    e.preventDefault()

    const newVal = parseInt(inputStepValue.value)

    if (inputStepValue.value !== 0 && newVal) {
        axis.style.setProperty('--step-number', newVal)
        updateSelectedStep(selectedStep, axis)
    } else {
        errorMsgShow()
    }
}

function updateSelectedStep(textContainer, targetElWIthVariables) {
    const currentValue = getComputedStyle(targetElWIthVariables)
        .getPropertyValue('--step-number')
        .trim()

    textContainer.innerHTML = currentValue
}

function errorMsgShow() {
    msgError.classList.add('active')
}

function errorMsgHide() {
    msgError.classList.remove('active')
}
