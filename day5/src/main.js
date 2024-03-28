/*
    Data types in JS
    number 12, 12.45, 100000000000000 - 15 digits
    string 'Sample'
    Bigint 1000000000000000000 > 15 digits
    boolean true/ false
    undefined var a; 
                a = 15;
                then a will be undefined until a is assigned  a = 8;
    null var a = null;
    object
        array 
        date
        object
    

    onchange	An HTML element has been changed
    onclick	The user clicks an HTML element
    onmouseover	The user moves the mouse over an HTML element
    onmouseout	The user moves the mouse away from an HTML element
    onkeydown	The user pushes a keyboard key
    onkeyup The user releases a keyboard key
    onload	The browser has finished loading the page
 */
var img;
console.log(img);
function printType() {
  let stringType = typeof "Test";
  let numberType = typeof 123;
  let bigIntType = typeof BigInt(999999999999999999999999);
  let booleanType = typeof true;
  let arrayType = typeof [1, 2, 3, 4, 5];
  let objectType = typeof {
    name: "Upskill",
    course: "Javascript",
  };
  let dateType = typeof new Date();
  document.getElementById("dateText").innerHTML = new Date();
  document.getElementById("outputText").innerHTML =
    stringType +
    " " +
    numberType +
    " " +
    bigIntType +
    " " +
    booleanType +
    " " +
    arrayType +
    " " +
    objectType +
    " " +
    dateType;
}

function checkInstance() {
  const arrayType = ["Saab", "Volvo", "BMW"];
  const date1 = new Date();
  const obj = { name: "Upskill", class: "5" };
  const stringType = "Test message";
  document.getElementById("instancePara").innerHTML =
    (arrayType instanceof Array) +
    "<br>" +
    (arrayType instanceof Object) +
    "<br>" +
    (arrayType instanceof String) +
    "<br>" +
    (date1 instanceof Date) +
    "<br>" +
    (date1 instanceof Object) +
    "<br>" +
    (obj instanceof Object) +
    "<br>" +
    (arrayType instanceof Number) +
    "<br>" +
    (stringType instanceof String);
}

function onSubmit() {
  console.log("Events in JS");
  console.log("onclick event");
}

function onMouseOverAction() {
  console.log("Mouse over called");
  document.getElementById("button2").style.backgroundColor = "green";
  document.getElementById("button2").innerHTML = "Hovered";
}

function onMouseOutAction() {
  document.getElementById("button2").style.backgroundColor = "aquamarine";
  document.getElementById("button2").innerHTML = "Submit";
}

function onValueChange() {
  console.log("Value changed");
}

function animateImg(type) {
  img.width = type === "over" ? 150 : 100;
  img.height = type === "over" ? 150 : 100;
}

function bodyOnLoad() {
  console.log("page loaded");
  img = document.getElementById("logoImg");
}
