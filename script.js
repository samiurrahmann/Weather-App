async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "24d9bcd274af75493d78dd6da48a6601"; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    const weatherResult = document.getElementById("weatherResult");
    weatherResult.innerHTML = "Loading...";
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.cod === 200) {
        weatherResult.innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
          <p><strong>Weather:</strong> ${data.weather[0].main}</p>
          <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
          <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;
      } else {
        weatherResult.innerHTML = `<p>City not found. Please try again.</p>`;
      }
    } catch (error) {
      weatherResult.innerHTML = `<p>Error fetching weather data.</p>`;
      console.error(error);
    }
  }
  