const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const apiKey = "6dbc605b617b1ecc991caaa7c3c9cb6c";

const searchBox = document.querySelector("#search input")
const searchBtn = document.querySelector("#search button")

const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apiKey}`)
    
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector("#weather").style.display = "none"
    }
    else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humadity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "cloudy (1).png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "raining.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "sun.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "cloudy.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "2682844_cloud_day_precipitation_rain_snow_icon.png";
        }
    
        document.querySelector("#weather").style.display = "block";
        document.querySelector(".error").style.display = "none"

    }

  
}

searchBtn.addEventListener("click", () => {
    
    checkWeather(searchBox.value);
})