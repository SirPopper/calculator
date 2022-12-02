//input text into display-lower
const displayLower = document.querySelector(".display-lower");

const key = document.querySelectorAll(".key.num");

key.forEach((key) => {
  key.addEventListener("click", () => {
    let displayLowerText = displayLower.textContent;
    displayLower.textContent = displayLowerText + key.textContent;
  });
});

//math functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

//making the functions work
const displayUpper = document.querySelector(".display-upper");

const keyOps = document.querySelectorAll(".key.ops");
keyOps.forEach((key) => {
  key.addEventListener("click", () => {
    displayUpper.textContent = displayLower.textContent;
    displayLower.textContent = "";
  });
});
