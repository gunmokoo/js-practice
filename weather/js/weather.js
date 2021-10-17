const API_KEY = "b740ff5bacad6b9d67457f7c8443b617";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const temp = document.querySelector("#weather span:nth-child(2)");
      const title = document.querySelector("#weather span:last-child");
      temp.innerText = `${data.main.temp} ℃`;
      weather.innerText = data.weather[0].main;
      title.innerText = `weather in ${data.name}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
