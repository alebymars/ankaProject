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
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${day}`
    );

    let data = await response.json();

    console.log(`data => ${JSON.stringify(data)}`);
    localStorage.setItem("weather", JSON.stringify(data));

    setTimeout(() => {
      addWeatherInfo();
    }, 2000);
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
  const LS = JSON.parse(localStorage.getItem("weather"));
  const infoWeather = Object.values(LS);

  const hour = Object.values(infoWeather[2].forecastday[0].hour);
  hour.map((hour) => {
    console.log(hour.time);
  });

  // console.log(infoWeather[2].forecastday[0].hour);

  // infoWeather.map((data, index) => {
  //   // console.log(data.forecastday.hour.time);
  //   const test = Object.values(data);
  //   // test.map((info) => {
  //   //   const other = Object.values(info);
  //   //   // other.map((qa) => {
  //   //   //   console.log(qa);
  //   //   // });
  //   //   // console.log(other);
  //   // });
  //   console.log(data);
  // });

  const cardDiv = `
  <div class="cardUpInfo">
      <p class="cityText">
          Кемерово
      </p>
      <div class="cardUpInfoWeather">
          <div class="tempAndConditionDiv">
              <p class="tempText">
                  +20°C
              </p>
              <p class="conditionText">
                  Ясно
              </p>
          </div>
          <img src="./images/sun.png" class="imageWeather" />
      </div>
  </div>
  <div class="cardMiddleInfo">
      <p>
          влажность: 50%
      </p>
      <img src="./images/blob.png" class="imageIcon" />
      <p>
          ветер: 24м.с
      </p>
      <img src="./images/wind.png" class="imageIcon" />
  </div>
  <div class="cardDownInfo">
      <div class="hourWeather">
          <p class="timeText">
              19:00
          </p>
          <p class="timeWeatherText">
              +20
          </p>
      </div>
  </div>
  `;

  const test = "<p>test</p>";

  const main = document.getElementById("mainBlock");
  const card = document.createElement("div");
  card.className = "card";
  card.id = "card";
  card.innerHTML = cardDiv;

  main.appendChild(card);
};
