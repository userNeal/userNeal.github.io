const weather = document.querySelector("#weather span:last-child");
const city = document.querySelector("#weather span:first-child");
const API_KEY = "9c1c4bd91e7108e079dcd760ce68a01f";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url).then((response) => response.json()).then((data) => {
        city.innerText = `Today's Weather: ${data.weather[0].main}`;
        weather.innerText = `/ ${data.name}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 
