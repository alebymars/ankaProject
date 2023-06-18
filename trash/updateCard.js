export const updateCard = () => {
  const LS = JSON.parse(localStorage.getItem("weather"));
  const infoWeather = Object.values(LS);

  console.log(infoWeather);

  const frd = Object.values(infoWeather[2].forecastday);
  frd.map((days) => {
    // console.log(days);
  });

  // родительский компонент карусели
  const cardDownInfo = document.getElementById("cardDownInfo");

  // удаляем все из карусели с временем и погодой на каждый час
  while (cardDownInfo.firstChild) {
    cardDownInfo.removeChild(cardDownInfo.firstChild);
  }

  // мапим данные в карусель (время и погоду на каждый час)
  const hour = Object.values(infoWeather[2].forecastday[0].hour);
  hour.map((hour) => {
    // генерируем родительский элемент
    const hourWeather = document.createElement("div");
    hourWeather.id = "hourWeather";
    hourWeather.className = "hourWeather";

    // генерируем дочерний элемент из карточки с каруселью (часы)
    const timeText = document.createElement("p");
    timeText.id = "timeText";
    timeText.className = "timeText";

    // генерируем дочерний элемент из карточки с каруселью (погода)
    const weatherText = document.createElement("p");
    weatherText.id = "weatherText";
    weatherText.className = "weatherText";
    hourWeather.innerHTML = `
      <p class="timeText">
        ${hour.time.split(" ")[1]}
      </p>
      <p class="weatherText">
        ${hour.temp_c}°C
      </p>
      `;
    // вставляем данные в родительский элемент (вставили дату и погоду)
    cardDownInfo.appendChild(hourWeather);
  });

  // получаем влажность по id
  const humidity = document.getElementById("humidity");
  // получаем ветер по id
  const wind = document.getElementById("wind");
  // получаем иконку погоды по id
  const imgWeather = document.getElementById("imgWeather");
  // получаем описание погоды по id (пасмурно, солнечно и т.д)
  const conditionText = document.getElementById("conditionText");
  // получаем название города по id
  const cityText = document.getElementById("cityText");

  // меняем значения влажности, ветра, изображение у иконки погоды, описание погоды (одним словом), название города
  humidity.innerHTML = `влажность: ${infoWeather[1].humidity}%`;
  wind.innerHTML = `ветер: ${infoWeather[1].wind_kph}км/ч`;
  imgWeather.src = `https:${infoWeather[1].condition.icon}`;
  conditionText.innerHTML = infoWeather[1].condition.text;
  cityText.innerHTML = infoWeather[0].name;

  // console.log(infoWeather[0].name);
};

window.updateCard = updateCard;
