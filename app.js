// console.log("Hello world");

const button = document.querySelector("button");
console.log(button.textContent);

button.addEventListener("click", changeColour);

function changeColour() {
  document.body.style.background = "pink";
}

button.addEventListener("mouseover", mouseColour);

function mouseColour() {
  document.body.style.background = "orange";
}
