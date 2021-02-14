const targetForm = document.querySelector('.js-targetForm');
const targetInput = targetForm.querySelector('input');
const targetting = document.querySelector('.js-targetting')

const TARGET_LS = "currentTarget"
const SHOWING_TARGETTING_CN = 'showing';


function saveTarget(text) {
    localStorage.setItem(TARGET_LS, text)
}

function handleTargettingSubmit(event) {
    targetForm.classList.add(SHOWING_TARGETTING_CN)
    event.preventDefault()
    const currentValue = targetInput.value;
    paintTargetting(currentValue)
    saveTarget(currentValue)
}

function askForTarget() {
    targetForm.classList.add(SHOWING_TARGETTING_CN)
    targetForm.addEventListener('submit', handleTargettingSubmit)
    
}

function paintTargetting(text) {
    targetForm.classList.remove(SHOWING_TARGETTING_CN);
    targetting.classList.add(SHOWING_TARGETTING_CN)
    targetting.innerText = `${text}`
    targetting.addEventListener('click', rewriteTargetting)
}

function rewriteTargetting(text) {
    targetting.classList.remove(SHOWING_TARGETTING_CN)
    targetForm.classList.add(SHOWING_TARGETTING_CN)
    saveTarget()
}


const currentTarget = localStorage.getItem(TARGET_LS);
const emptyTarget = currentTarget === !null
console.log(currentTarget)

function loadTarget() {

    if (currentTarget === null || currentTarget === undefined) {
        askForTarget()
    } else if (currentTarget === 'undefined') {
        askForTarget()
    } else {
        console.log('비어있지 않아')
        paintTargetting(currentTarget)
    }
}
loadTarget()

// else if (currentTarget.value === undefined) {
//     askForTarget()
// } 
// paintTargetting(currentTarget)

// if (currentTarget !== null )