const targetForm = document.querySelector('.js-targetForm');
const targetInput = targetForm.querySelector('input');
const targetting = document.querySelector('.js-targetting')

const TARGET_LS = "currentTarget"
const SHOWING_TARGETTING_CN = 'showing';

function saveTarget(text) {
    localStorage.saveItem(TARGET_LS, text)
}

function paintTargetting(text) {
    targetForm.classList.remove(SHOWING_TARGETTING_CN);
    targetting.classList.add(SHOWING_TARGETTING_CN)
    targetting.innerText = `${text}`
}
function handleTargettingSubmit(event) {
    event.preventDefault()
    const currentValue = targetInput.value;
    paintTargetting(currentValue)
}

function askForTarget() {
    targetForm.classList.add(SHOWING_TARGETTING_CN)
    targetForm.addEventListener('submit', handleTargettingSubmit)
}

function loadTarget() {
    const currentTarget = localStorage.getItem(TARGET_LS);
    if (currentTarget === null) {
        askForTarget()
    } else {
        paintTargetting(currentTarget)
    }
}
loadTarget()
