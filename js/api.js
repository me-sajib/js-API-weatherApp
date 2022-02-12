document.getElementById("search").addEventListener("click", function () {
  const city = document.getElementById("city").value;
  // get api key
  const apiKey = `4abaf6d9e96b2b35e70d16208d39aa08`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  // get data from api
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      try {
        // get data set to ui
        document.getElementById("cityName").innerHTML = data.name;
        document.getElementById("deg").innerHTML = data.main.temp;
        document.getElementById("clouds").innerHTML =
          data.weather[0].description;
      } catch (e) {
        // if city not found
        alert("Please enter a valid city name");
        document.getElementById("cityName").innerHTML = "";
        document.getElementById("deg").innerHTML = "";
        document.getElementById("clouds").innerHTML = "";
      }
    });
});
