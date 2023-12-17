const apiKey = "115e01e390084142be821636d10bb532"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const apiIconUrl = "https://openweathermap.org/img/wn/"

const searchInput = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherCard = document.querySelector('.weather-card')
const weatherImage = document.querySelector('.weather-info-icon')
const errorField = document.querySelector('.error')
const cityName = document.querySelector('.weather-city-name')
const tempValue = document.querySelector('.weather-info-temp')
const humidityValue = document.querySelector('.weather-humidity')
const windValue = document.querySelector('.weather-wind')

let weatherData = []

function showErrorMessage() {
    console.log("City not found")
    errorField.style.display = "block"
    weatherCard.style.display = "none"
}

function getCityTime() {

    const localDate = new Date();
    const localTimzone = (localDate.getTimezoneOffset() / -60) + 100
    const localTime = localDate.getHours();

    const cityTimeZone = (weatherData.timezone / 3600) + 100
    let cityTime = localTime + (cityTimeZone - localTimzone)

    if (cityTime > 24) cityTime -= 24
    if (cityTime < 0) cityTime += 24

    console.log(`in ${weatherData.name}: ${cityTime}h`)

    return cityTime
}

function themeSelector(cityTime) {

    let r = document.querySelector(":root")

    if (cityTime >= 18 || cityTime < 5) {
        r.style.setProperty("--body-bgcolor", "#0c0025")
        r.style.setProperty("--first-gradient-color", "#000000")
        r.style.setProperty("--second-gradient-color", "#5b548a")
    } else {
        r.style.setProperty("--body-bgcolor", "#DBEFF9")
        r.style.setProperty("--first-gradient-color", "#00feba")
        r.style.setProperty("--second-gradient-color", "#5b548a")
    }
}

function showWeatherData() {

    const cityTime = getCityTime()
    themeSelector(cityTime)
    const actualWeatherIcon = weatherData.weather[0].icon

    cityName.innerText = weatherData.name
    tempValue.innerText = Math.round(weatherData.main.temp) + "°C"
    humidityValue.innerText = weatherData.main.humidity + "%"
    windValue.innerText = weatherData.wind.speed + " km/h"
    weatherImage.src = apiIconUrl + actualWeatherIcon + `@4x.png`

    weatherCard.style.display = "block"
    errorField.style.display = "none"
}

async function getWeatherData(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if (response.status == 404) {
        showErrorMessage()
        return false
    }
    weatherData = await response.json()
    return true
}

async function init(e) {

    e.preventDefault()
    const city = searchInput.value

    if (city) {
        if (await getWeatherData(city))
            showWeatherData()
    } else {
        showErrorMessage()
    }
}

searchBtn.addEventListener('click', init)