
// API Key Form openweathermap website
const apikey = "dxXXX7e41ddeXXXXXXXXXXXXXXXXXXXXXXX"
const apiurl = 'https://api.openweathermap.org/data/2.5/weather'
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const searchinputbox = document.getElementById('inputsearch');

searchinputbox.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {

        getweatherreport(searchinputbox.value);
        document.querySelector('.weather-icon').style.display = "block";
        document.querySelector('.desc').style.display = "block";
    }

});







function getweatherreport(city) {
    fetch(`${apiurl}?q=${city}&appid=${apikey}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showreport);
}


function showreport(weather) {

    console.log(weather)
    let city = document.getElementById('city');
    city.innerText = `${weather.name} , ${weather.sys.country}`

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg; C`

    let minmax = document.getElementById('minmaxtemp');
    minmax.innerHTML = `${Math.floor(weather.main.temp_min)}&deg; C (Min)/ ${Math.ceil(weather.main.temp_max)}&deg; C (Max)`

    let desc = document.getElementById('weatherifo');
    desc.innerText = `${weather.weather[0].main}`;

    const humi = document.getElementById('humid');
    humi.innerText = `Humidity: ${weather.main.humidity}%`
    const pres = document.getElementById('pressure');
    pres.innerText = `Pressure: ${weather.main.pressure} hPa`
    const feel = document.getElementById('feels');
    feel.innerHTML = `Feels Like: ${weather.main.feels_like} &deg C`

    let date = document.getElementById('todaydate');
    let today_date = new Date()
    date1 = today_date.toLocaleDateString(undefined, options);
    date.innerText = `${date1}`;

    const iconElement = document.querySelector(".weather-icon");
    iconElement.innerHTML = `<img src="icons/${weather.weather[0].icon}.png"/>`;







}