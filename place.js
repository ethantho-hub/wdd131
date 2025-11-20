// -------------------------------------
// Example dynamic data (replace with API data later if needed)
// -------------------------------------
const placeData = {
  capital: "Example City",
  population: "2.1 million",
  founded: "1846",
  region: "Northwest",
  elevation: "300m",
  timezone: "GMT-7",
  image: "https://via.placeholder.com/1200x600"
};

const weatherData = {
  temperature: "72°F",
  condition: "Sunny",
  humidity: "40%",
  wind: "8 mph",
  icon: "https://via.placeholder.com/60"
};

// -------------------------------------
// Insert data into the page
// -------------------------------------
document.getElementById("capital").textContent = placeData.capital;
document.getElementById("population").textContent = placeData.population;
document.getElementById("founded").textContent = placeData.founded;
document.getElementById("region").textContent = placeData.region;
document.getElementById("elevation").textContent = placeData.elevation;
document.getElementById("timezone").textContent = placeData.timezone;
document.getElementById("place-image").src = placeData.image;

document.getElementById("temperature").textContent = weatherData.temperature;
document.getElementById("condition").textContent = weatherData.condition;
document.getElementById("humidity").textContent = weatherData.humidity;
document.getElementById("wind").textContent = weatherData.wind;
document.getElementById("weather-icon").src = weatherData.icon;

// -------------------------------------
// Auto-fill Last Modified date
// -------------------------------------
document.getElementById("lastModified").textContent = document.lastModified;
