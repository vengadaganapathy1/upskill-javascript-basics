/*
function fnName() {

}
fnName();

function fnName(arg1, arg2) {

}
fnName(7, 8);
fnName('test', 'test1');

function fnName(arg1, arg2) {
    return arg1 + arg2;
}
fnName(7, 8); // 15
fnName('test', 'test1'); // testtest1


6 + 6 12
'6' + 6 66
'name' + 4 name4
*/

function onLoad() {
  // var addValue = add();
  // console.log(addValue);
}

function calculateUsingIf(type) {
  var input1 = Number(document.getElementById("input1").value);
  var input2 = Number(document.getElementById("input2").value);
  var response;
  if (type === "add") {
    response = input1 + input2;
  } else if (type === "sub") {
    response = input1 - input2;
  } else if (type === "mul") {
    response = input1 * input2;
  } else if (type === "div") {
    response = input1 / input2;
  } else if (type === "mod") {
    response = input1 % input2;
  } else {
    alert("Select a valid type");
  }
  return response;
}

function calculateUsingSwitch(type) {
  var input1 = Number(document.getElementById("input1").value);
  var input2 = Number(document.getElementById("input2").value);
  var response;
  switch (type) {
    case "add":
      response = input1 + input2;
      break;
    case "sub":
      response = input1 - input2;
      break;
    case "mul":
      response = input1 * input2;
      break;
    case "div":
      response = input1 / input2;
      break;
    case "mod":
      response = input1 % input2;
      break;
    default:
      alert("Select a valid type");
      break;
  }
  return response;
}

function add(conditionType) {
  if (conditionType === "switch") {
    alert(calculateUsingSwitch("add"));
  } else {
    alert(calculateUsingIf("add"));
  }
}

function subtract() {
  alert(calculateUsingIf("sub"));
}

function multiply() {
  alert(calculateUsingIf("mul"));
}

function divide() {
  alert(calculateUsingIf("div"));
}

function modulus() {
  alert(calculateUsingIf("mod"));
}

function expo() {
  alert(calculateUsingIf("expo"));
}

function findTodaysDayOfTheWeek() {
  var dateObject = new Date();
  var currentDay = dateObject.getDay();
  var day;
  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "Not a valid date";
      break;
  }
  alert(day);
}

function isCurrentYearLeapYear() {
  var dt = new Date();
  var currentYear = dt.getFullYear();
  var mod4 = currentYear % 4;
  alert(mod4 === 0 ? "Leap year" : "Not a leap year");
}

function isEnteredYearALeapYear() {
  var enteredYear = document.getElementById("enteredYear").value;
  var mod4 = enteredYear % 4;
  alert(mod4 === 0 ? "Leap year" : "Not a leap year");
}

function isEnteredYearALeapYearUsingSwitch() {
  var enteredYear = document.getElementById("enteredYear1").value;
  var mod4 = enteredYear % 4;
  switch (mod4) {
    case 0:
      alert("Leap year");
      break;
    default:
      alert("Not a leap year");
      break;
  }
}

function alertArrayValues() {
  /*[index]
  .length
  push - insert value
  pop - remove last value
  concat - merge two arrays
  slice - slice(startIndex, endIndex) -
      Will slice from start index to end index
      original array will not get disturbed
  splice - slice(startIndex, deleteCount) -
      Will slice from start index to count mentioned
      original array will get disturbed
      will add elements as well in the deleted place
      */
  var array = [1, 3, 6, 5, 7, 9];
  console.log("2 index - ", array[2]);
  console.log("Length - ", array.length);
  array.push(10);
  console.log("Current array - ", array);

  array.push(8);
  array.push(88);
  array.push(8888);
  array.pop();
  console.log("Current array - ", array);

  var array1 = [1, 2, 3];
  var array2 = [4, 5, 6];
  var array3 = array1.concat(array2);
  console.log(array3);

  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var subArray = array.slice(7, 9);
  console.log(subArray, array);

  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var subArray = array.splice(0, 100);
  console.log(subArray, array);

  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var subArray = array.splice(2, 4, 22, 33);
  console.log(subArray, array);

  // Wrong code
  var array = [2, 4, 6, 8, 10, 12];
  for (var count = 0; count < array.length; count++) {
    if (array[count] % 2 === 0) {
      array.splice(count, 1);
    }
  }
  console.log(array);

  //Correct code
  var array = [2, 4, 6, 8, 10, 12];
  for (var count = array.length - 1; count >= 0; count--) {
    if (array[count] % 2 === 0) {
      array.splice(count, 1);
    }
  }
  console.log(array);
}
