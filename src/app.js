function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}

let apiKey = "bcfbb3o05cb4945t5f00bab1b879706f";
let apiUrl = ` https://api.shecodes.io/weather/v1/current?query=${encodeURIComponent(
  "New York"
)}&key=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
