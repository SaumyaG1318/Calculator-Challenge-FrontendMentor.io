import { changeTheme } from "./themeChange.js";
import { Calculator } from "./calculator.js";
//Theme Changing button
const themeBut = document.querySelector(".but button");
let count = 1;
themeBut.addEventListener("click", (ev) => {
  changeTheme(count);
  count++;
});

//Calculator and its functionality
let calculator = new Calculator();
const processedDiv = document.querySelector(".processed");
const unprocessedDiv = document.querySelector(".unprocessed");

//Deling with the text input
const numbers = document.querySelectorAll("[data-number]");

numbers.forEach((num) => {
  num.addEventListener("click", function (ev) {
    calculator.append(num.textContent);
    show();
  });
});

//Dealing with the operators

const operatorDiv = document.querySelectorAll("[data-operation]");

operatorDiv.forEach((oper) => {
  oper.addEventListener("click", function (ev) {
    calculator.operation(oper.textContent);
    show();
  });
});

//Dealing with Delete
const del = document.querySelector("#Delete");
del.addEventListener("click", function (event) {
  calculator.delete();
  show();
});

//Dealing with the reset button
const reset = document.querySelector("#Reset");

reset.addEventListener("click", () => {
  calculator.clear();
  show();
});

//Dealing with the result button
const compute = document.querySelector("#result");

compute.addEventListener("click", (ev) => {
  calculator.calc();
  show();
});

//show results
function show() {
  processedDiv.textContent = calculator.pro;
  unprocessedDiv.textContent = calculator.unpro;
}
