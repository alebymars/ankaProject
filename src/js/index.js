// возвращаем выбранный селект (насколько дней выбираем погоду 1-7)
const selectDay = () => {
  const day = document.getElementById("selectDay").value;
  // console.log(day);
  return day;
};

// возвращаем город из поля поиска.
const searchCity = () => {
  const city = document.getElementById("searchCity").value;
  // console.log(`city => ${city}`);
  return city;
};

// делаем запрос api, получаем данные о погоде.
// сохраняем данные в localStorage.
// вызываем addWeatherInfo()
const fetchWeather = async (city, day, apiKey) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${day}&lang=ru`
    );

    let data = await response.json();

    console.log(`data => ${JSON.stringify(data)}`);
    localStorage.setItem("weather", JSON.stringify(data));

    // setTimeout(() => {
    //   addWeatherInfo();
    // }, 2000);
  } catch (e) {
    console.log(`Error => ${e}`);
  }
};

const addWeatherInfo = () => {
  const LS = JSON.parse(localStorage.getItem("weather"));
  const infoWeather = Object.values(LS);

  infoWeather.map((data) => {
    const name = data.name;
    console.log(`name => ${name}`);

    // добавляем проверку, если undefined то ничего не возвращаем
    if (name == undefined) {
      return;
    }

    const main = document.querySelector(".main");
    const paragraph = document.createElement("p");
    paragraph.innerHTML = name;
    main.appendChild(paragraph);
  });
};

const addCard = () => {
  const cardDiv = `
                <div class="cardUpInfo">
                    <p id="cityText" class="cityText">
                        Кемерово
                    </p>
                    <div class="cardUpInfoWeather">
                        <div class="tempAndConditionDiv">
                            <p class="tempText">
                                +20°C
                            </p>
                            <p id="conditionText" class="conditionText">
                                Ясно
                            </p>
                        </div>
                        <img id="imgWeather" src="./images/sun.png" class="imageWeather" />
                    </div>
                </div>
                <div class="cardMiddleInfo">
                    <p id="humidity">
                        влажность: 50%
                    </p>
                    <img src="./images/blob.png" class="imageIcon" />
                    <p id="wind">
                        ветер: 24км/ч
                    </p>
                    <img src="./images/wind.png" class="imageIcon" />
                </div>
                <div id="cardDownInfo" class="cardDownInfo">
                    <div id="hourWeather" class="hourWeather">
                        <p id="timeText" class="timeText">
                            19:00
                        </p>
                        <p id="weatherText" class="weatherText">
                            +20
                        </p>
                    </div>
                </div>
  `;

  const main = document.getElementById("mainBlock");
  const card = document.createElement("div");
  card.className = "card";
  card.id = "card";
  card.innerHTML = cardDiv;

  main.appendChild(card);
};

const updateCard = () => {
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

  // мапим данные в карусель (время и погоду на каждыйы час)
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
  // получаем описание погоды по id (пасмупно, солнечно и т.д)
  const conditionText = document.getElementById("conditionText");
  // получаем название города по id
  const cityText = document.getElementById("cityText");

  // меняем значения влажности, ветра, изображение у иконки погоды, описание погоды (одним словом), название города
  humidity.innerHTML = `влажность: ${infoWeather[1].humidity}%`;
  wind.innerHTML = `ветер: ${infoWeather[1].wind_kph}км/ч`;
  imgWeather.src = `https:${infoWeather[1].condition.icon}`;
  conditionText.innerHTML = infoWeather[1].condition.text;
  cityText.innerHTML = infoWeather[0].name;

  console.log(infoWeather[0].name);
};
