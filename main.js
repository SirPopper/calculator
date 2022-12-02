//input text into display-lower
const displayLower = document.querySelector(".display-lower");

const key = document.querySelectorAll(".key.num");

key.forEach((key) => {
  key.addEventListener("click", () => {
    let displayLowerText = displayLower.textContent;
    displayLower.textContent = displayLowerText + key.textContent;
  });
});

//function to get number before operator
function numBeforeOperator(string) {
  return string.split(" ")[0];
}

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

//ops Buttons
let inputArray = [];
let opsArray = [];
const displayUpper = document.querySelector(".display-upper");

const keyOps = document.querySelectorAll(".key.ops");
keyOps.forEach((key) => {
  key.addEventListener("click", () => {
    displayUpper.textContent = displayLower.textContent;
    displayLower.textContent = "";

    //push array with number before operator in upper display
    inputArray.push(numBeforeOperator(displayUpper.textContent));
    opsArray.push(key.textContent);

    displayUpper.textContent =
      inputArray[inputArray.length - 1] + ` ${key.textContent}`;

    console.log(inputArray);
    console.log(opsArray);
  });
});

//equal button logic
const keyEqual = document.querySelector(".key.equal");

keyEqual.addEventListener("click", () => {
  //push array with number before operator in upper display
  inputArray.push(numBeforeOperator(displayLower.textContent));
  console.log(inputArray);
  if (opsArray[opsArray.length - 1] == "%") {
    displayLower.textContent = divide(
      Number(inputArray[inputArray.length - 2]),
      Number(inputArray[inputArray.length - 1])
    );
  } else if (opsArray[opsArray.length - 1] == "x") {
    displayLower.textContent = multiply(
      Number(inputArray[inputArray.length - 2]),
      Number(inputArray[inputArray.length - 1])
    );
  } else if (opsArray[opsArray.length - 1] == "-") {
    displayLower.textContent = subtract(
      Number(inputArray[inputArray.length - 2]),
      Number(inputArray[inputArray.length - 1])
    );
  } else if (opsArray[opsArray.length - 1] == "+") {
    displayLower.textContent = add(
      Number(inputArray[inputArray.length - 2]),
      Number(inputArray[inputArray.length - 1])
    );
  }

  displayUpper.textContent =
    inputArray[inputArray.length - 2] +
    " " +
    opsArray[opsArray.length - 1] +
    " " +
    inputArray[inputArray.length - 1] +
    " = ";
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
