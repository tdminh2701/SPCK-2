const API_KEY = "4269652c5e1b6a66a34f9d3d16ecc098";
const DEFAULT_VALUE = "MINH "
const searchInput = document.getElementById("search-input")
const cityName = document.querySelector(".city-name")
const weatherState = document.querySelector(".weather-state")
const weatherIcon = document.querySelector(".weather-icon")
const temperature = document.querySelector(".temperature")
const sunrise = document.querySelector(".value-sunrise")
const sunset = document.querySelector(".value-sunset")
const humidity = document.querySelector(".humidity")
const windSpeed = document.querySelector(".wind-speed")
console.log(weatherIcon)





searchInput.addEventListener("change",(event) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}&lang=vi&units=metric`
    )
    .then((Response) => Response.json())
    .then((data) =>{
        console.log("data",data)
        cityName.innerHTML = data.name || DEFAULT_VALUE
        weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE
        weatherIcon.src =
        `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` || 
        DEFAULT_VALUE
        temperature.innerHTML = Math.round(data.main.temp) ||"15"
        sunrise.innerHTML = data.sys.sunrise
        sunset.innerHTML = data.sys.sunset
        humidity.innerHTML = data.main.humidity
        windSpeed.innerHTML = data.wind.speed
    }) 
} )