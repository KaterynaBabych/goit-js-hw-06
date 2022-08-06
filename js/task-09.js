const linkFon = document.querySelector(".widget");
const buttonChangeColor = document.querySelector(".change-color");
const color = document.querySelector(".color");

buttonChangeColor.addEventListener('click', onChangeColor)

function onChangeColor(event) {
  document.body.style.background = getRandomHexColor();
  color.textContent = getRandomHexColor();
}

function getRandomHexColor() {

  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;

};
