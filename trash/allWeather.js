const LS = JSON.parse(localStorage.getItem("weather"));
const infoWeather = Object.values(LS);

const frd = Object.values(infoWeather[2].forecastday);

export const allWeather = () => {
  frd.map((days) => {
    console.log(days);
  });
};
