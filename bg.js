// 프랑스국립중앙박물관연합
//https://www.photo.rmn.fr/CS.aspx?VP3=SearchResult&VBID=2CMFCI8ABZT12&SMLS=1&RW=1904&RH=851&PN=1#/SearchResult&VBID=2CMFCI8ABZT12&SMLS=1&RW=1904&RH=851&PN=1
const body = document.querySelector('body');

const IMG_NUMBER = 5

function handleImgLoad() {
    console.log('finished loading')
}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`
    image.classList.add('bgImage')
    body.appendChild(image)
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number
}

function init() {
    const randomNumber = genRandom()
    paintImage(randomNumber)
}
init()