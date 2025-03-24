document.getElementById("search-btn").addEventListener("click", async () => {
    const location = document.getElementById("location-input").value;
    if (!location) {
        alert("Please enter a city name.");
        return;
    }
    
    const apiKey = '7bd863f3908c7179c7bf9321e9012b56'; // Replace with your OpenWeatherMap API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === "404") {
            alert("City not found. Please enter a valid city.");
            return;
        }
        
        document.getElementById("city-name").innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById("weather-condition").innerText = `Condition: ${data.weather[0].description}`;
        document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        document.getElementById("weather-result").style.display = "block";
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Something went wrong! Please try again later.");
    }
});
