import { updateCard } from "./updateCard.js";

export const addCard = () => {
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
                          <img id="imgWeather" src="./src/images/sun.png" class="imageWeather" />
                      </div>
                  </div>
                  <div class="cardMiddleInfo">
                      <p id="humidity">
                          влажность: 50%
                      </p>
                      <img src="./src/images/blob.png" class="imageIcon" />
                      <p id="wind">
                          ветер: 24км/ч
                      </p>
                      <img src="./src/images/wind.png" class="imageIcon" />
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
  updateCard();
};

window.addCard = addCard;
