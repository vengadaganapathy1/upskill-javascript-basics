let greetingMessage; // Declaration
greetingMessage = "Hi Team!"; // Assignment
let a = 10;
const b = 20;
let count = 0;
{
  let count = 8;
  //console.log(count);
}
{
  let count = 2;
  //console.log(count);
}
//console.log(count);

const count1 = 0;
{
  const count1 = 8;
  //console.log(count1);
}
{
  const count1 = 2;
  //console.log(count1);
}
//console.log(count1);

var count2 = 0;
var count2 = 10;
console.log(count2);
{
  var count2 = 8;
  console.log(count2);
}
{
  var count2 = 2;
  console.log(count2);
}
console.log(count2);

function hello() {
  let test = 1;
  greetingMessage = "Hi team! Welcome";
  a = 20;
  //console.log(test);
}

function helloTN() {
  let test = 2;
  //console.log(test);
}
// Let
/*
block scope
we can re assign 
we cannot re declare inside same block
 */

function add(a, b) {
  return a + b;
}

var add1 = function add(a, b) {
  return a + b;
};

var add2 = (a, b) => a + b;

function printAnswer(a, b) {
  var calc = add1(a, b);
  console.log(calc);
}

function printAnswer1(a, b) {
  var calc = add(a, b);
  console.log(calc);
}

function printAnswer3(a, b) {
  var calc = add2(a, b);
  console.log(calc);
}

printAnswer(4, 5);
printAnswer1(5, 5);
printAnswer3(5, 6);

let message = "This is class on";
let classTopic = "JS";
let addedString = message + " " + classTopic;
console.log(addedString);
let addedString1 = `${message} ${classTopic}`;
console.log(addedString1);

function printInConsole() {
  console.log("Hi");
}

// printInConsole();

// for (let count = 0; count < 10; count++) {
//   printInConsole();
// }

// const timer = setInterval(printInConsole, 1000);

function clearTimer() {
  clearInterval(timer);
}

const timeOutTimer = setTimeout(printInConsole, 10000);

function clearTimer() {
  clearInterval(timer);
}

function clearTimeoutTimer() {
  clearTimeout(timeOutTimer);
}

function calculate(type) {
  if (type === "add") {
    var addedValue =
      Number(document.getElementById("number1").value) +
      Number(document.getElementById("number2").value);
  } else if (type === "sub") {
    var addedValue =
      Number(document.getElementById("number1").value) -
      Number(document.getElementById("number2").value);
  }
  console.log(addedValue);
}

let counter;
let loaders;
let timer;
function startLoader() {
  counter = 0;
  loaders = document.getElementsByClassName("loader");
  for (let count = 0; count < loaders.length; count++) {
    loaders[count].style.display = "none";
  }
  timer = setInterval(manageLoader, 1000);
}

function stopLoader() {
  clearInterval(timer);
}

function manageLoader() {
  counter = counter + 1;
  if (counter % 5 === 1) {
    for (let count = 0; count < loaders.length; count++) {
      loaders[count].style.display = "none";
    }
    loaders[0].style.display = "block"; //1sec
  } else if (counter % 5 === 2) {
    loaders[1].style.display = "block"; // 2 sec
  } else if (counter % 5 === 3) {
    loaders[2].style.display = "block"; // 2 sec
  } else if (counter % 5 === 4) {
    loaders[3].style.display = "block"; // 2 sec
  } else if (counter % 5 === 0) {
    loaders[4].style.display = "block"; // 2 sec
  }
}

function indexOfArray() {
  var array = [1, 2, 3, 5];
  console.log(array.indexOf(1232));
}
indexOfArray();

function indexOfString() {
  var str = "This is a JS session";
  console.log(str.indexOf("JS1"));
}
indexOfString();
function isPalindrome() {
  let stringToTest = "tteyyett4";
  let isPalindrome = true;
  for (let count = 0; count < stringToTest.length / 2; count++) {
    console.log(count, stringToTest.length - 1 - count);
    if (stringToTest[count] !== stringToTest[stringToTest.length - 1 - count]) {
      isPalindrome = false;
    }
  }

  if (!isPalindrome) {
    alert("Not a palindrome");
  } else {
    alert("palindrome");
  }
}

isPalindrome();
