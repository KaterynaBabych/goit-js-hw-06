const linkRange = document.querySelector("#font-size-control");
const linkText = document.querySelector("#text");

linkRange.addEventListener('input', onMouseMove);

function onMouseMove(event) {
    linkText.style.fontSize = event.currentTarget.value + "px";
    
}