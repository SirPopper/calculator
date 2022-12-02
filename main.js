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
let opsArray = [];
const displayUpper = document.querySelector(".display-upper");

const keyOps = document.querySelectorAll(".key.ops");
keyOps.forEach((key) => {
  key.addEventListener("click", () => {
    displayUpper.textContent = displayLower.textContent;
    displayLower.textContent = "";
    opsArray.push(key.textContent);
    console.log(opsArray);
  });
});

//equal button logic
const keyEqual = document.querySelector(".key.equal");

keyEqual.addEventListener("click", () => {
  console.log(opsArray.length);
  if (opsArray[opsArray.length - 1] == "%") {
    displayLower.textContent = divide(
      Number(displayUpper.textContent),
      Number(displayLower.textContent)
    );
  } else if (opsArray[opsArray.length - 1] == "x") {
    displayLower.textContent = multiply(
      Number(displayUpper.textContent),
      Number(displayLower.textContent)
    );
  } else if (opsArray[opsArray.length - 1] == "-") {
    displayLower.textContent = subtract(
      Number(displayUpper.textContent),
      Number(displayLower.textContent)
    );
  } else if (opsArray[opsArray.length - 1] == "+") {
    displayLower.textContent = add(
      Number(displayUpper.textContent),
      Number(displayLower.textContent)
    );
  }
});

//clear button logic
const clearBtn = document.querySelector(".btn-clear");

clearBtn.addEventListener("click", () => {
  displayLower.textContent = "";
  displayUpper.textContent = "";
});

//delete button logic
const delBtn = document.querySelector(".btn-delete");

delBtn.addEventListener("click", () => {
  let text = displayLower.textContent;
  displayLower.textContent = text.slice(0, -1);
});
