/*
    Internal and external JS
    Internal - <script></script>
    External - <script src=''></script>
    Document write - Will erase all tags in document and update it with new value passed.
    Window.print used to print the page.
    Let - Re declaration not possible, but re assignment is possible
    // Re declaration - let a = 9; let a = 10; -  Not possible
    // Re assignment - let a = 11; a = 20; - Possible
    const - both Re declaration and  re assignment is not possible
    // Re declaration - const a = 9; const a = 10; -  Not possible
    // Re assignment - const a = 11; a = 20; - Not Possible
    // const a; 
    // a = 10; - Not possible
    // const a = 10; - Possible
    var - both Re declaration and  re assignment is  possible
    // Re declaration - var a = 9; var a = 10; -  Possible
    // Re assignment - var a = 11; a = 20; - Possible

    // Functions
    // plain function
    // function name() {} -> name()
    // function with arguments
    // function name(name1, name2) {} -> name('John', 'Mathew')
    // function with return types
    // function name(name1, name2) { return name1 + name 2} -> name('John', 'Mathew')
    // we can call a function inside another function
    // function type1() {
    //       type2();
    // }

    // We can discuss later.
    // function type1() {
    //     function type2() {

    //     }
    // }
    // <input type="text" id="firstName"/>
    // document.getElementById('firstName').value 
    // `` -> used to append strings and add dynamic values
    // `Static content - ${dynamicValue}` - Use ${} to add dynamic values
    // getElementsByClasses will always return a collection / Array and 
    // can be accessed using index, ex: collection[i]
    // Timer in javascript
    // setInterval(handler, time in ms) setInterval(timeHandler, 5000)
    // clearInterval
    // var - variables declared outside the function? 
    // to have global scope(Can be accesses in any functions)
    // setInterval, setTimeout, clearInterval, clearTimeout
    // setInterval - kind of for loop, which will trigger callback 
    // function after specified time
    // timer = setInterval(handler, 3000)
    // clearInterval(timer)
    // setTimeout will be called only once after specified time
    // var time = setTimeout(timeoutHandler, 2000)
    // clearTimeout(time);
    // callback function ? will be discussed later
     
*/

function showLogo() {
  document.getElementById("logo").style.display = "block";
}

function hideLogo() {
  document.getElementById("logo").style.display = "none";
}

function writeIntoDocument() {
  document.write("Hello !!");
}

function printDoc() {
  window.print();
}

var outsideVar = 5;

function variableDeclarations() {
  var insideVar;
  let insideLet;

  insideVar = 6;
  insideLet = 9;

  outsideVar = 10;
  console.log("Declare var - ", insideVar);
  console.log("Declare let - ", insideLet);

  var a = 10;
  var a = 5;
  console.log(a); // possible to redeclare
  let b = 10;
  // let b = 5;
  b = 9; // possible
  console.log(a); // not possible to redeclare

  const constValue = 8;
  // constValue = 10; //Will throw type error while execution

  add();
  subtract();

  let total = 0;

  for (let i = 0; i < 5; i++) {
    total = total + i;
  }
}

function add() {
  let insideVar1 = 6;
  let b = 10;
  console.log("add - ", outsideVar);
  console.log("add - ", insideVar1);
}

function subtract() {
  let insideVar2 = 6;
  console.log("Sub - ", outsideVar);
  console.log("add - ", insideVar2);
}

function loadImage(imageUrl) {
  var img = document.getElementById("imageHolder");
  img.style.display = "block";
  img.src = imageUrl;
}

var timer;
function startSlideshow() {
  timer = setInterval(timeHandler, 1000);
}

const imageURLArray = [
  "../assets/images/css.svg",
  "../assets/images/html5.png",
  "../assets/images/angular.png",
  "../assets/images/react.png",
];
var count = 0;

function timeHandler() {
  console.log(count, "Timer called");
  var img = document.getElementById("imageHolder");
  img.src = imageURLArray[count];
  img.style.display = "block";
  count += 1;
  if (count === 4) {
    count = 0;
  }
}

function stopSlideshow() {
  clearInterval(timer);
}

function printFullName() {
  document.getElementById("fullName").innerHTML = readFullName();
}

function readFullName() {
  return (
    document.getElementById("firstName").value +
    document.getElementById("lastName").value
  );
}

function printPercentage() {
  let language1 = Number(document.getElementById("language1").value);
  let language2 = Number(document.getElementById("language2").value);
  let maths = Number(document.getElementById("maths").value);
  let science = Number(document.getElementById("science").value);
  let social = Number(document.getElementById("social").value);
  let total = language1 + language2 + maths + science + social;
  let average = total / 5;
  let type1Conversion = "Total: " + average;
  let type2Conversion = "Total: " + " " + average;
  let type3Conversion = `Total: ${average}`;
  document.getElementById("total").innerHTML = type3Conversion;
}

function printPercentageUsingClass() {
  let marks = document.getElementsByClassName("mark");
  var total = 0;
  for (count = 0; count < marks.length; count++) {
    total = total + Number(marks[count].value);
  }
  document.getElementById("total").innerHTML = `Total: ${total / 5}`;
}

function printPercentageUsingIndividualClass() {
  let language1 = Number(document.getElementsByClassName("language1")[0].value);
  let language2 = Number(document.getElementsByClassName("language2")[0].value);
  let maths = Number(document.getElementsByClassName("maths")[0].value);
  let science = Number(document.getElementsByClassName("science")[0].value);
  let social = Number(document.getElementsByClassName("social")[0].value);
  let total = language1 + language2 + maths + science + social;
  document.getElementById("total").innerHTML = `Total: ${total / 5}`;
}
var count = 0;
var timer;
var timer1;
var setTimeoutTimer;
function startTimer() {
  timer = setInterval(counterHandler, 500);
  timer1 = setInterval(counterHandler1, 500);
}

function stopTimer() {
  console.log("Stop called");
  clearInterval(timer);
  clearInterval(timer1);
}

function counterHandler() {
  count += 1;
  console.log("counter 0 called");
  console.log(count);
  if (count === 15) {
    clearInterval(timer);
    clearInterval(timer1);
  }
}

function counterHandler1() {
  console.log("counter 1 called");
}

function startTimeout() {
  setTimeoutTimer = setTimeout(timeoutHandler, 10000);
}

function timeoutHandler() {
  console.log("called");
}

function stopTimeout() {
  clearTimeout(setTimeoutTimer);
}
