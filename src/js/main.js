const auth = () => {
  document.getElementById("headerButtonText").style.visibility = "visible";

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
            <select id="selectDay" name="daysWeather">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            </select>
        </div>
        <div id="mainBlock" class="mainBlock"></div>
`;

  const superMainBlock = document.createElement("div");
  superMainBlock.className = "superMainBlock";
  superMainBlock.id = "superMainBlock";
  superMainBlock.innerHTML = info;

  document.body.appendChild(superMainBlock);
};
