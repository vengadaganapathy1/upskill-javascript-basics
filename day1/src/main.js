// Day 1 topics
/*
  VS code - Editor
  Extensions - Live server, prettier, code spell check'
  ! - HTML code creator
  head, style
  head, script
  alert()
  console.log
  confirm - ok cancel button will appear
  Right click - Inspect -> Elements, console, source
  h1 - h6 heading tags
  class and id references
  inline Style - style="color: blue;"
  inline style will have more preference
  internal css 
  internal script file
  external css
  external script file
  css - color, font-style, font-family
  Split windows
  <button> - name- <button>Submit</button>
  Events -> onclick, onmouseover, onmouseout
  Functions - set of grouped lines which can be reused or called whenever needed.
  functionName() - how to call function
  function functionName() {

  }

  camelCase - variable names and function names should be in cameCase.
  folder structure - folder names and workspace should be in lower case.
  .css, .js, .html extensions
  linking style and js files -> <link href , <script src
  is not defined error in console ? function is called without creation
  title="Will complete the action" is used to show tooltip for button
  <button title="Submit">Submit</button>
  getElementById - id="button1"
  getElementsByClasses
  Collections - arrays or group of values
  . dot operator - used to access html element properties or attributes
  "" - empty string, " " - not a empty string
  arrays -> [],
  var arr = [1, 2, 3 ,4 ]; arr[0], arr.length - 4, startingIndex = 0
  ['Student 1', 'Student 2', 'Student 3']
  innerHTMl ->
  <p>Paragraph</p> 
  <div><p>paragraph 2</p></div>
  we can use either '' or "" in javascript. 
  But we cannot use "" inside a "". Need to use '' inside ""
  <br/> - move to next line
  Self closing tags <p>text</p> <br/> <img src=""/>
  */

function test() {
  console.log("12345");
}

for (var counter = 0; counter < 1000; counter++) {
  test();
}

function showConsole() {
  console.log("Welcome !!!");
}

function showConfirmationWindow() {
  confirm('Are  Kavitha you sure "You want to logout"?');
}

function onSubmit() {
  alert("1");
  alert("2");
  alert("3");
}

function showMouseOverMessage() {
  console.log("On Mouse over message");
}

function showMouseOutMessage() {
  console.log("On Mouse out message");
}

function showTooltip() {
  document.getElementById("button2").title = "This is updated Message";
}

function hideTooltip() {
  document.getElementById("button2").title = "";
}

function findTotalButtons() {
  var buttonCollections;
  buttonCollections = document.getElementsByClassName("buttonClass");
  // console.log(buttonCollections[0].innerHTML);
  // console.log(buttonCollections[1].innerHTML);
  // console.log(buttonCollections[2].innerHTML);
  // console.log(buttonCollections[3].innerHTML);
  // console.log(buttonCollections[4].innerHTML);
  // console.log(buttonCollections[5].innerHTML);

  for (count = 0; count < buttonCollections.length; count++) {
    console.log(buttonCollections[count].innerHTML);
  }
}

function increaseSize() {
  document.getElementById("imageHolder1").width = 200;
  document.getElementById("imageHolder1").height = 200;
}

function increaseSizeOfDiv() {
  document.getElementById("divCont").style.width = "200px";
  document.getElementById("divCont").style.height = "200px";
}

function switchOn() {
  document.getElementById("imageHolder").src =
    "../assets/images/pic_bulb_on.gif";
}

function switchOff() {
  document.getElementById("imageHolder").src =
    "../assets/images/pic_bulb_off.gif";
}

function changeStyle() {
  document.getElementById("para1").style.color = "red";
  document.getElementById("para1").style.fontWeight = "bold";
  document.getElementById("para1").style.textDecoration = "underline";
}

function resetStyle() {
  document.getElementById("para1").style.color = "";
  document.getElementById("para1").style.fontWeight = "";
  document.getElementById("para1").style.textDecoration = "";
}

function addBorder() {
  document.getElementById("borderImg").style.border = "4px solid red";
}

function manageImageSize(type) {
  const width = document.getElementById("imageCont4").width;
  const height = document.getElementById("imageCont4").height;
  document.getElementById("imageCont4").width =
    type === "increase" ? width + 10 : width - 10;
  document.getElementById("imageCont4").height =
    type === "increase" ? height + 10 : height - 10;
}
