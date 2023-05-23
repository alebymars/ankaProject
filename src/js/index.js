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

    let main = document.querySelector(".main");
    let paragraph = document.createElement("p");
    paragraph.innerHTML = name;
    main.appendChild(paragraph);
  });
};
