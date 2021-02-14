const weather = document.querySelector('.js-weather')
const API_KEY = '0654e5b3c92cc52e51c8c735506097dc';
const COORDS = 'coords';

function getWeather(lat, lng) {
    fetch(`
        https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric
    `)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            const temperatrue = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperatrue} @ ${place}`
        })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    console.log(position)
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
        // latitude = latitude,
        // longtitude = longitude
    };
    saveCoords(coordsObj)
    getWeather(latitude, longitude)
}

function handleGeoError() {
    console.log("cant access geo location")
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if( loadedCoords === null) {
        askForCoords();
    } else {
        //getWeather
        const parseCoords = JSON.parse(loadedCoords)
        getWeather(parseCoords.latitude, parseCoords.longitude)
    }
}

function init() { 
    loadCoords()
}
init()