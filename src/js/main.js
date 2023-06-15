const auth = () => {
  const username = document.getElementById("username").value;

  if (username.length >= 3) {
    localStorage.setItem("username", username);
    document.getElementById(
      "headerText"
    ).textContent = `Привет, ${localStorage.getItem("username")}!`;
    removeWrapper();
    // newInfoPage();
  } else {
    alert("Введите свое имя (от 3 символов)");
  }
};

const removeWrapper = () => {
  const wrapper = document.getElementById("wrapper");
  document.body.removeChild(wrapper);
};
