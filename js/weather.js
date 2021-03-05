const weather = document.querySelector(".weather");
const API_KEY = "962dd8da2d2bd79354227bbba9c679ec";
const coords = 'coords';
const showingClassInWeather = 'showing';
const hiddenClassInWeather = 'hidden';

const cityText = weather.querySelector(".city");
const countryText = weather.querySelector(".country");
const temperature = weather.querySelector(".temperature");
const weatherIcon = weather.querySelector(".weather-icon");
const weatherDes = weather.querySelector(".weather-text");
const minMaxTemp = weather.querySelector(".temperature-second");
const iconPic = weatherIcon.querySelector(".icon-pic");
const tempIcon = temperature.querySelector(".temperature-icon");
const temperatureMain = temperature.querySelector(".temperature-main");

function getWeather(lat, lon){
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json()
    }).then(function(json){
        const city = json.name;
        const country = json.sys.country;
        const mainTemp = json.main.temp;
        const minTemp = json.main.temp_min;
        const maxTemp = json.main.temp_max;
        const weatherText = json.weather[0].main;
        const icon = json.weather[0].icon;

        tempIcon.classList.add(showingClassInWeather);
        cityText.innerText = city;
        countryText.innerText = country;
        temperatureMain.innerText = mainTemp;
        tempIcon.innerHTML = `℃`;
        iconPic.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        weatherDes.innerText = weatherText;
        minMaxTemp.innerText = `Min : ${minTemp} / Max : ${maxTemp}`;
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(coords, JSON.stringify(coordsObj));
}

function callGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function callGeoError(){
    weather.innerText = `I can not access your location`;
}

function askCoords(){
    navigator.geolocation.getCurrentPosition(callGeoSuccess, callGeoError);
    tempIcon.classList.add(hiddenClassInWeather);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(coords);
    if(loadedCoords === null){
        askCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();