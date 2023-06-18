// возвращаем выбранный селект (насколько дней выбираем погоду 1-7)
const selectDay = () => {
  const day = document.getElementById("selectDay").value;
  console.log(day);
  return day;
};

// возвращаем город из поля поиска.
const searchCity = () => {
  const city = document.getElementById("searchCity").value;
  console.log(`city => ${city}`);
  return city;
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
