// делаем запрос к api, получаем данные о погоде.
// сохраняем данные в localStorage.
import { generateCards } from "./generateCards.js";

// вызываем addWeatherInfo()
export const fetchWeather = async (city, day, apiKey) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?q=${city}&days=${day}&key=${apiKey}&lang=ru`
    );

    // console.log(response.status);
    if (response.status === 400) {
      alert(
        `Код ошибки: ${response.status}, введены некорректные данные, попробуйте изменить запрос!`
      );
      // const main = document.getElementById("mainBlock");
      // const empty = document.createElement("p");
      // empty.innerText = `Ошибка ${response.status}`;
      // main.appendChild(empty);
    }

    let data = await response.json();

    // console.log(`data => ${JSON.stringify(data)}`);
    localStorage.setItem("weather", JSON.stringify(data));

    document.getElementById("mainBlock").innerHTML = "";
    generateCards();
  } catch (e) {
    console.log(`Error => ${e}`);
    // const empty = document.createElement("p");
    // empty.append("Ошибка: ", e);
    // main.appendChild(empty);
  }
};

window.fetchWeather = fetchWeather;
