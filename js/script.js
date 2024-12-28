// Replace 'YOUR_API_KEY' with your OpenWeatherMap API key.
const API_KEY = 'ff449a0f98cfacc466c5a2cb9a09067d';

document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name.');
    }
});

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found.');
        
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    const weatherHtml = `
        <div class="weather-card">
            <h2>${data.name}, ${data.sys.country}</h2>
            <h4>${data.weather[0].description}</h4>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Feels like: ${data.main.feels_like} °C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind speed: ${data.wind.speed} m/s</p>
        </div>
    `;

    document.getElementById('weatherResult').innerHTML = weatherHtml;
}
