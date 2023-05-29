let now = new Date();
let date = document.querySelector("date");
let minutes = now.getMinutes();
let hours = now.getHours();
let datee = now.getDate();
let year = now.getFullYear();
let days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[now.getMonth()];
let span = document.querySelector(".date2");
span.innerHTML = ` ${day}, ${month}, ${year}, ${hours}:${minutes}`;

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const searchInput = document.querySelector("#search");
  const searchValue = searchInput.value;
  const resultDiv = document.querySelector("#searchResult");
  resultDiv.textContent = ` ${searchValue}`;
  let key = "5f472b7acba333cd8a035ea85a0d4d4c";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${key}&units=metric`;

  axios.get(url).then(displayWeather);
});
function displayWeather(response) {
  let weatherDiv = document.querySelector("#weather");
  let temperature = Math.round(response.data.main.temp);
  let description = response.data.weather[0].description;

  weatherDiv.innerHTML = `${temperature}`;
}
