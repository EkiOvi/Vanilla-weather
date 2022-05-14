function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}
let apiKey = "3c40f355454ee90b6d99421486e6132d";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=NewYork&appid= ${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
