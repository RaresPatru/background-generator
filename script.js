//var color1 = document.querySelector(".color1");
//var color2 = document.querySelector(".color2");
// ADD OPACITY BUTTON, ADD HEX DISPLAY OPTION !!!
var css = document.querySelector("h3");
var input = document.querySelector("input");
var bodyId = document.getElementById("gradient");
var button = document.querySelectorAll("BUTTON");
var value1 = document.getElementsByTagName("INPUT")[0];
var value2 = document.getElementsByTagName("INPUT")[1];

function setInitialGradient() {
  value1.setAttribute("value", "#ff0000");
  value2.setAttribute("value", "#ffff00");
  css.textContent =
    "CODE: linear-gradient(to right, " +
    value1.value +
    ", " +
    value2.value +
    ");";
}

function setGradient() {
  bodyId.style.background =
    "linear-gradient(to right, " +
    input.value +
    ", " +
    input.nextElementSibling.value +
    ")";
  css.textContent = "CODE: " + bodyId.style.background + ";";
  /* Get get background property from the body tag in the CSS stylesheet
  var body = document.querySelector("body");
  var bckgrdStyle = window.getComputedStyle(body);
   var bckgrdValue = bckgrdStyle.getPropertyValue("background"); */
}

function randomColor() {
  return (
    "#" +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")
  );
}

function randomizeColors() {
  input.value = randomColor();
  input.nextElementSibling.value = randomColor();
  setGradient();
}

function randomizeColorsHex() {
  input.value = randomColor();
  input.nextElementSibling.value = randomColor();
  css.textContent =
    "CODE: linear-gradient(to right, " +
    input.value +
    ", " +
    input.nextElementSibling.value +
    ");";
  bodyId.style.background =
    "linear-gradient(to right, " +
    input.value +
    ", " +
    input.nextElementSibling.value +
    ")";
}

function converter(ev) {
  if (ev.target === button[2]) {
    setGradient();
    css.textContent =
      "CODE: linear-gradient(to right, " +
      input.value.toString(16).padStart(6, "0") +
      ", " +
      input.nextElementSibling.value.toString(16).padStart(6, "0") +
      ");";
  } else if (ev.target === button[3]) {
    setGradient();
  }
}

window.addEventListener("load", setInitialGradient);
button[0].addEventListener("click", randomizeColors);
button[1].addEventListener("click", randomizeColorsHex);
button[2].addEventListener("click", converter);
button[3].addEventListener("click", converter);
input.addEventListener("input", setGradient);
input.nextElementSibling.addEventListener("input", setGradient);
