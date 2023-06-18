const auth = () => {
  const username = document.getElementById("username").value;

  if (username.length >= 3) {
    localStorage.setItem("username", username);
    document.getElementById(
      "headerText"
    ).textContent = `Привет, ${localStorage.getItem("username")}!`;
    removeWrapper();
    addMainPageInfo();
  } else {
    alert("Введите свое имя (от 3 символов)");
  }
};

const removeWrapper = () => {
  const wrapper = document.getElementById("wrapper");
  document.body.removeChild(wrapper);
};

const addMainPageInfo = () => {
  const info = `
        <div class="divTown">
            <input id="searchCity" class="inputTown" type="text" placeholder="Кемерово" value="Кемерово" />
            <input class="inputButtonFind" type="button" value="поиск" onclick="fetchWeather(searchCity(), selectDay(), '0140d4f898854dc5813185344231506')" />
            <input class="inputButtonFind" type="button" value="сколько дней?" onclick="selectDay()" />
            <select id="selectDay" name="daysWeather">
            <option value="4">4</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
            <input class="inputButtonFind" type="button" value="add card" onclick="addCard()">
            <input class="inputButtonFind" type="button" value="update card" onclick="updateCard()">
        </div>
        <div id="mainBlock" class="mainBlock"></div>
`;

  const superMainBlock = document.createElement("div");
  superMainBlock.className = "superMainBlock";
  superMainBlock.id = "superMainBlock";
  superMainBlock.innerHTML = info;

  document.body.appendChild(superMainBlock);
};
