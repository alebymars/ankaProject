export const generateCards = () => {
  const LS = JSON.parse(localStorage.getItem("weather"));
  const infoWeather = Object.values(LS);

  infoWeather.map((item) => {
    const main = document.getElementById("mainBlock");

    item.forecastday &&
      Object.values(item.forecastday).map((info) => {
        // console.log(info);
        const cardUpInfo = `
                    <div class="cardUpInfo">
                        <div class="cardUpInfoCityAndDate">
                          <p id="cityText" class="cityText">
                          ${infoWeather[0].name}
                          </p>
                          <p id="dateText" class="dateText">
                              ${info.date}
                          </p>
                        </div>
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

window.generateCards = generateCards;
