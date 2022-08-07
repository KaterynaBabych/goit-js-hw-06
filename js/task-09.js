const linkFon = document.querySelector(".widget");
const buttonChangeColor = document.querySelector(".change-color");
const color = document.querySelector(".color");

buttonChangeColor.addEventListener('click', onChangeColor)

function onChangeColor(event) {
  const colorHex = getRandomHexColor();

  document.body.style.background = colorHex;
  color.textContent = colorHex;
}

function getRandomHexColor() {

  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;

};
