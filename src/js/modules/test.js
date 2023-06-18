const LS = JSON.parse(localStorage.getItem("weather"));
const infoWeather = Object.values(LS);

// console.log(infoWeather);

const frd = Object.values(infoWeather[2]);

// console.log("test.js => ", infoWeather);

export const test = () => {
  frd.map((days) => {
    // console.log("frd map => ", days);
    const cardDiv = `
                    <div class="cardUpInfo">
                        <p id="cityText" class="cityText">
                            ${infoWeather[0].name}
                        </p>
                        <p id="cityText" class="dateText">
                            ${days[0].date}
                        </p>
                        <div class="cardUpInfoWeather">
                            <div class="tempAndConditionDiv">
                                <p class="tempText">
                                    +20°C
                                </p>
                                <p id="conditionText" class="conditionText">
                                ${infoWeather[1].condition.text}
                                </p>
                            </div>
                            <img id="imgWeather" src="https:${infoWeather[1].condition.icon}" class="imageWeather" />
                        </div>
                    </div>
                    <div class="cardMiddleInfo">
                        <p id="humidity">
                        влажность: ${infoWeather[1].humidity}%
                        </p>
                        <img src="./src/images/blob.png" class="imageIcon" />
                        <p id="wind">
                        ветер: ${infoWeather[1].wind_kph}км/ч
                        </p>
                        <img src="./src/images/wind.png" class="imageIcon" />
                    </div>
                    <div id="cardDownInfo" class="cardDownInfo">
                        <div id="hourWeather" class="hourWeather">
                            <p id="timeText" class="timeText">
                            19:00
                            </p>
                            <p id="weatherText" class="weatherText">
                            20°C
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
  });
};

const generateCarouselWeather = () => {
  frd.map((days, i) => {
    Object.values(days).map((item, i) => {
      // console.log("day => ", item.day.avgtemp_c)
      // console.log("hour => ", item.hour)
      const hourWeather = document.getElementById("hourWeather");

      const weatherDay = document.createElement("p");
      weatherDay.id = "weatherText";
      weatherDay.className = "weatherText";
      weatherDay.innerText = item.day.avgtemp_c;

      hourWeather.appendChild(weatherDay);
    });
  });
};

export const generateCards = () => {
  const cardUpInfo = document.createElement("div");
  cardUpInfo.className = "cardUpInfo";

  const cityText = document.createElement("p");
  cityText.className = "cityText";
  cityText.id = "cityText";

  const dateText = document.createElement("p");
  dateText.className = "dateText";
  dateText.id = "dateText";

  const cardUpInfoWeather = document.createElement("div");
  cardUpInfoWeather.className = "cardUpInfoWeather";
  cardUpInfoWeather.id = "cardUpInfoWeather";

  const tempAndConditionDiv = document.createElement("div");
  tempAndConditionDiv.className = "tempAndConditionDiv";

  const tempText = document.createElement("p");
  tempText.className = "tempText";
  tempText.id = "tempText";

  const conditionText = document.createElement("p");
  conditionText.className = "conditionText";
  conditionText.id = "conditionText";

  const imageWeather = document.createElement("img");
  imageWeather.className = "imageWeather";
  imageWeather.id = "imgWeather";
  imageWeather.src = `https:`;

  const cardMiddleInfo = document.createElement("div");
  cardMiddleInfo.className = "cardMiddleInfo";
  cardMiddleInfo.id = "cardMiddleInfo";

  const humidity = document.createElement("p");
  humidity.className = "humidity";
  humidity.id = "humidity";

  const imageIcon = document.createElement("img");
  imageIcon.className = "imageIcon";

  const wind = document.createElement("p");
  wind.className = "wind";
  wind.id = "wind";

  const cardDownInfo = document.createElement("div");
  cardDownInfo.className = "cardDownInfo";
  cardDownInfo.id = "cardDownInfo";

  const hourWeather = document.createElement("div");
  hourWeather.className = "hourWeather";
  hourWeather.id = "hourWeather";

  const timeText = document.createElement("p");
  timeText.className = "timeText";
  timeText.id = "timeText";

  const weatherText = document.createElement("p");
  weatherText.className = "weatherText";
  weatherText.id = "weatherText";
  // все выше это создание элементов (div, p, image...)

  // ниже будем создавать эти элементы в нужном нам порядке\
  const main = document.getElementById("mainBlock");

  // добавляем в кардАпИнфо нужные нам блоки
  cardUpInfo.appendChild(cityText);
  cardUpInfo.appendChild(dateText);

  // добавляем в кардАпИнфоВеатхер нужные нам блоки
  cardUpInfoWeather.appendChild(tempAndConditionDiv);
  cardUpInfoWeather.appendChild(imageWeather);
  // добавляем в кардАпИнфо нужные нам блоки
  cardUpInfo.appendChild(cardUpInfoWeather);

  // добавляем все блоки в главный элемент (верх, мид и низ карточки)
  main.appendChild(cardUpInfo);
};

export const test2 = () => {
  infoWeather.map((item) => {
    const main = document.getElementById("mainBlock");

    item.forecastday &&
      Object.values(item.forecastday).map((info) => {
        // console.log(info);
        const cardUpInfo = `
                    <div class="cardUpInfo">
                        <p id="cityText" class="cityText">
                            ${infoWeather[0].name}
                        </p>
                        <p id="dateText" class="dateText">
                            ${info.date}
                        </p>
                        <div class="cardUpInfoWeather">
                            <div class="tempAndConditionDiv">
                                <p class="tempText">
                                ${info.day.avgtemp_c}°C
                                </p>
                                <p id="conditionText" class="conditionText">
                                ${info.day.condition.text}
                                </p>
                            </div>
                            <img id="imgWeather" src="https:${info.day.condition.icon}" class="imageWeather" />
                        </div>
                    </div>
      `;

        const cardMiddleInfo = `
      <div class="cardMiddleInfo">
        <p id="humidity">
        влажность: ${info.day.avghumidity}%
        </p>
        <img src="./src/images/blob.png" class="imageIcon" />
        <p id="wind">
        ветер: ${info.day.maxwind_kph}км/ч
        </p>
        <img src="./src/images/wind.png" class="imageIcon" />
      </div>
      `;
        const cardDownInfo = document.createElement("div");
        cardDownInfo.className = "cardDownInfo";
        cardDownInfo.id = "cardDownInfo";


        Object.values(info.hour).map((item) => {
          const hourWeather = document.createElement("div");
          hourWeather.className = "hourWeather";
          hourWeather.id = "hourWeather";

          const timeText = document.createElement("p");
          timeText.className = "timeText";
          timeText.id = "timeText";

          const weatherText = document.createElement("p");
          weatherText.className = "weatherText";
          weatherText.id = "weatherText";

          timeText.append(item.time.split(" ")[1]);
          weatherText.append(item.temp_c + "°C");

          hourWeather.appendChild(timeText);
          hourWeather.appendChild(weatherText);

          cardDownInfo.appendChild(hourWeather);
        });

        const card = document.createElement("div");

        card.className = "card";
        card.id = "card";
        card.innerHTML = cardUpInfo + cardMiddleInfo;
        card.appendChild(cardDownInfo);

        main.appendChild(card);
      });
  });
};

window.test = test;
window.test2 = test2;
window.generateCards = generateCards;
