"use strict";

function updateHTML() {
  var selectedText = "para";
  document.getElementById(selectedText).innerHTML =
    "<div class='bold'>Test</div>";
}

function manageLight() {
  console.log(document.getElementById("img").src);
  if (document.getElementById("img").src.indexOf("pic_bulb_on.gif") !== -1) {
    document.getElementById("img").src = "../assets/images/pic_bulb_off.gif";
  } else if (
    document.getElementById("img").src.indexOf("pic_bulb_off.gif") !== -1
  ) {
    document.getElementById("img").src = "../assets/images/pic_bulb_on.gif";
  }
}

function lightON() {
  document.getElementById("img1").src = "../assets/images/pic_bulb_on.gif";
}

function lightOFF() {
  document.getElementById("img1").src = "../assets/images/pic_bulb_off.gif";
}

function manageLights(currentState) {
  if (currentState === "ON") {
    document.getElementById("img2").src = "../assets/images/pic_bulb_on.gif";
  } else {
    document.getElementById("img2").src = "../assets/images/pic_bulb_off.gif";
  }
}

function getFullName(standard, rollNo, registrationNo) {
  var fullName = "Student of class - " + standard + " and Roll No - " + rollNo;
  document.getElementById("fullName").innerHTML = fullName;
}

function displayStudentList() {
  var studentList = "";
  for (let count = 1; count <= 10; count++) {
    studentList = studentList + '<div class="child">' + count + "</div>";
  }
  document.getElementById("list").innerHTML = studentList;
}

function changeColor() {
  document.getElementById("para1").innerHTML = "Updated text";
  document.getElementById("para1").style.fontSize = "30px";
  document.getElementById("para1").style.color = "red";
}

function showImage() {
  document.getElementById("img3").style.display = "block";
}

function hideImage() {
  document.getElementById("img3").style.display = "none";
}

function isMultiple(number, divisor) {
  //   if (number % divisor === 0) {
  //     alert("Multiple");
  //   } else {
  //     alert("Not a multiple");
  //   }

  // Ternary operator
  // Above function can be replaced by ternary operator as below
  number % divisor === 0 ? alert("Multiple") : alert("Not a multiple");
}
