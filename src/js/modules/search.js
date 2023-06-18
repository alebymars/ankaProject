// делаем запрос к api, получаем данные о погоде.
// сохраняем данные в localStorage.
import { generateCards } from "./generateCards.js";

// вызываем addWeatherInfo()
export const fetchWeather = async (city, day, apiKey) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?q=${city}&days=${day}&key=${apiKey}&lang=ru`
    );

    let data = await response.json();

    // console.log(`data => ${JSON.stringify(data)}`);
    localStorage.setItem("weather", JSON.stringify(data));

    document.getElementById("mainBlock").innerHTML = "";
    generateCards();
  } catch (e) {
    console.log(`Error => ${e}`);
  }
};

window.fetchWeather = fetchWeather;
