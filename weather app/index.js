const apiKey = "ad1b41b60169d4b3aa34c3bea6a072bc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".error").style.color = "red";
        document.querySelector(".weather-section").style.display = "none"
    }
    else{
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather-section").style.display = "block";
    }

    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".weather-condition").innerHTML = data.weather[0].main;

    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.jpg";
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})  

