function usingAndOperator() {
  var enteredNo = document.getElementById("inputField").value;
  if (enteredNo > 5 && enteredNo < 10 && enteredNo % 2 === 0) {
    alert("No lies between 6 and 9 and even no");
  } else if (enteredNo > 5 && enteredNo < 10 && enteredNo % 2 !== 0) {
    alert("No lies between 6 and 9 and odd no");
  } else {
    alert("No does not lies between 6 and 9");
  }
}

function usingOrOperator() {
  var enteredNo = document.getElementById("inputField1").value;
  if (enteredNo !== "") {
    var convertToNo = Number(enteredNo);
    if (convertToNo === 5 || convertToNo === 10 || convertToNo === 15) {
      alert("Entered 5 or 10 or 15");
    } else {
      alert("Entered different no");
    }
  } else {
    alert("Enter a number");
  }
}

function isDivisibleBy4() {
  var enteredInput = document.getElementById("inputField3").value;
  if (enteredInput % 4 === 0) {
    alert("Divisible by 4");
  } else if (enteredInput % 4 !== 0) {
    alert("Not divisible by 4");
  }
}

function isDivisibleBy2To10() {
  var enteredInput = document.getElementById("inputField4").value;
  var divisibleNumber = "";
  if (enteredInput % 2 === 0) {
    divisibleNumber = divisibleNumber + "2, ";
  }

  if (enteredInput % 3 === 0) {
    divisibleNumber = divisibleNumber + "3, ";
  }

  if (enteredInput % 4 === 0) {
    divisibleNumber = divisibleNumber + "4, ";
  }

  if (enteredInput % 5 === 0) {
    divisibleNumber = divisibleNumber + "5, ";
  }

  if (enteredInput % 6 === 0) {
    divisibleNumber = divisibleNumber + "6,";
  }

  if (enteredInput % 7 === 0) {
    divisibleNumber = divisibleNumber + "7, ";
  }

  if (enteredInput % 8 === 0) {
    divisibleNumber = divisibleNumber + "8, ";
  }

  if (enteredInput % 9 === 0) {
    divisibleNumber = divisibleNumber + "9, ";
  }

  if (enteredInput % 10 === 0) {
    divisibleNumber = divisibleNumber + "10";
  }

  if (divisibleNumber === "") {
    alert("Not divisible by 2 to 10");
  } else {
    alert("Divisible by - " + divisibleNumber);
  }
}

function isDivisibleBy2To10New() {
  var enteredInput = document.getElementById("inputField4").value;
  var divisibleNumber = [];
  for (var i = 2; i <= 10; i++) {
    if (enteredInput % i === 0) {
      divisibleNumber.push(i);
    }
  }
  if (divisibleNumber === "") {
    alert("Not divisible by 2 to 10");
  } else {
    alert("Divisible by - " + divisibleNumber.toString());
  }
}

function createTableDetails() {
  var studentObject = [
    { name: "Ganapathy", class: 5 },
    { name: "Sundar", class: 7 },
    { name: "Mani", class: 3 },
    { name: "John", class: 1 },
    { name: "Peter", class: 1 },
    { name: "Martin", class: 4 },
    { name: "Joel", class: 6 },
    { name: "Shyam", class: 8 },
  ];

  var table = document.getElementById("tableData");

  for (var count = 0; count < studentObject.length; count++) {
    const row = document.createElement("tr");
    row.id = (count + 1).toString();
    table.appendChild(row);
    const col1 = document.createElement("td");
    col1.innerHTML = studentObject[count].name;
    row.appendChild(col1);

    const col2 = document.createElement("td");
    col2.innerHTML = studentObject[count].class;
    row.appendChild(col2);

    const col3 = document.createElement("td");
    col3.innerHTML = "<button onclick='onEdit(this)'>Edit</button>";
    row.appendChild(col3);

    const col4 = document.createElement("td");
    col4.innerHTML = "<button onclick='onDelete(this)'>Delete</button>";
    row.appendChild(col4);

    // var row = table.insertRow(table.length);
    // row.id = (count + 1).toString();
    // row.insertCell(0).innerHTML = studentObject[count].name;
    // row.insertCell(1).innerHTML = studentObject[count].class;
    // row.insertCell(2).innerHTML =
    //   "<button onclick='onEdit(this)'>Edit</button>";
    // row.insertCell(3).innerHTML =
    //   "<button onclick='onDelete(this)'>Delete</button>";
  }
}

function createRow() {
  var table = document.getElementById("tableData");
  var row = table.insertRow(table.rows.length);
  row.insertCell(0).innerHTML = document.getElementById("nameField").value;
  row.insertCell(1).innerHTML = document.getElementById("classField").value;
  row.insertCell(2).innerHTML = "<button onclick='onEdit(this)'>Edit</button>";
  row.insertCell(3).innerHTML =
    "<button onclick='onDelete(this)'>Delete</button>";
}

function onDelete(rowDetails) {
  var table = document.getElementById("tableData");
  table.deleteRow(rowDetails.parentNode.parentNode.rowIndex);
}
var selectedRowDetails;

function onEdit(rowDetails) {
  selectedRowDetails = rowDetails;
  var getName = rowDetails.parentNode.parentNode.children[0].innerHTML;
  var getClass = rowDetails.parentNode.parentNode.children[1].innerHTML;
  document.getElementById("editNameField").value = getName;
  document.getElementById("editClassField").value = getClass;
}

function updateData() {
  selectedRowDetails.parentNode.parentNode.children[0].innerHTML =
    document.getElementById("editNameField").value;
  selectedRowDetails.parentNode.parentNode.children[1].innerHTML =
    document.getElementById("editClassField").value;
}

// let array = [1, 2, 3, 5];
/* let obj = {
  name: 'test',
  class: 5
}
*/
var studentArray = [
  {
    id: 1,
    name: "Student 1",
    class: 1,
    school: "TPGHS",
  },
  {
    id: 2,
    name: "Student 2",
    class: 2,
    school: "TPGHS",
  },
  {
    id: 3,
    name: "Student 3",
    class: 3,
    school: "TPGHS",
  },
  {
    id: 4,
    name: "Student 4",
    class: 4,
    school: "TPGHS",
  },
  {
    id: 5,
    name: "Student 5",
    class: 5,
    school: "TPGHS",
  },
  {
    id: 6,
    name: "Student 6",
    class: 4,
    school: "TPGHS",
  },
];

function printClass4Members() {
  for (var i = 0; i < studentArray.length; i++) {
    if (studentArray[i].class === 4) {
      console.log(studentArray[i].name);
    }
  }
}

/*
Operators in JS
+
-
*
/
% - Remainder - 8%5 => 3 
** 2**3 => 2x2x2 = 8
a += 2; a = a + 2; 
a -= 2; a = a - 2;
++
--

*/
function appendAllTextInputs() {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let input3 = document.getElementById("input3").value;

  return `${input1} ${input2} ${input3}`;
}

function displayAppendedStrings() {
  document.getElementById("displayText").innerHTML = appendAllTextInputs();
}

function updateStyle() {
  var collection = document.getElementsByClassName("para");
  console.log(collection.length);

  for (count = 0; count < collection.length; count++) {
    collection[count].style.color = "green";
  }
}

function isNoDivisibleBy5() {
  const input4 = document.getElementById("input4").value;
  const remainder = input4 % 5;
  if (remainder === 0) {
    alert("Entered no is divisible by 5");
  } else {
    alert("Entered no is not divisible by 5, remainder = " + remainder);
  }
}

function printPrimeNosBetween1To20() {
  // 3, 5, 7, 11, 13, 17, 19,
  let primeNoArray = [];

  for (outerCount = 1; outerCount <= 20; outerCount++) {
    let primeNoCheckArray = [];
    for (innerCount = 1; innerCount <= outerCount; innerCount++) {
      console.log(outerCount, innerCount, outerCount % innerCount);
      if (outerCount % innerCount === 0) {
        primeNoCheckArray.push(innerCount);
      }
    }
    console.log("-----------------------------------------------");
    if (primeNoCheckArray.length === 2) {
      primeNoArray.push(outerCount);
    }
  }
  console.log(primeNoArray);
}

function findDividents() {
  var divisibleArray = [];
  const input5 = document.getElementById("input5").value;
  if (input5 === "") {
    alert("Enter a valid no");
  } else {
    for (count = 2; count < input5; count++) {
      if (input5 % count === 0) {
        divisibleArray.push(count);
      }
    }
    divisibleArray.length > 0
      ? alert(`Entered no is divisible by ${divisibleArray}`)
      : alert(`Entered no is a prime no`);
  }
}

var studentArray = [
  {
    id: 1,
    name: "Student 1",
    class: 1,
    school: "TPGHS",
  },
  {
    id: 2,
    name: "Student 2",
    class: 2,
    school: "TPGHS",
  },
  {
    id: 3,
    name: "Student 3",
    class: 3,
    school: "TPGHS",
  },
  {
    id: 4,
    name: "Student 4",
    class: 4,
    school: "TPGHS",
  },
  {
    id: 5,
    name: "Student 5",
    class: 5,
    school: "TPGHS",
  },
  {
    id: 6,
    name: "Student 6",
    class: 4,
    school: "TPGHS",
  },
];

for (let count = 0; count < studentArray.length; count++) {
  if (studentArray[count].class === 4) {
    console.log("Name", studentArray[count]["name"]);
    console.log("Name", studentArray[count].name);
  }
}

/*
1
2 3
4 5 6
7 8 9 10
11 12 13 14
15 16 17 18 19
20 21 22 23 23 25
 */

function printSeries1() {
  let seriesCount = document.getElementById("seriesCount").value;
  const seq = document.getElementById("sequence");
  let dynamicString = "";
  for (row = 1; row <= seriesCount; row++) {
    for (let count = 1; count <= row; count++) {
      dynamicString += `<span>*</span>`;
    }
    dynamicString += "<br/>";
  }
  seq.innerHTML = dynamicString;
}

function printReverseSeries2() {
  let seriesCount = document.getElementById("seriesCount").value;
  const seq = document.getElementById("sequence");
  let dynamicString = "";
  for (row = seriesCount; row >= 0; row--) {
    for (let count = 1; count <= row; count++) {
      dynamicString += `<span>*</span>`;
    }
    dynamicString += "<br/>";
  }
  seq.innerHTML = dynamicString;
}

function printReverseSeries3() {
  const seq = document.getElementById("sequence");
  let dynamicString = "";
  let seriesCount = document.getElementById("seriesCount").value;
  for (row = 1; row <= seriesCount; row++) {
    for (let count = seriesCount - row; count >= 0; count--) {
      dynamicString += `<span></span>`;
    }
    for (let count = 1; count <= row; count++) {
      dynamicString += `<span>*</span>`;
    }
    dynamicString += "<br/>";
  }
  seq.innerHTML = dynamicString;
}

const printArraySeries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
function printReverseSeries4() {
  const seriesCount = document.getElementById("seriesCount").value;
  const seq = document.getElementById("sequence");
  let dynamicString = "";
  let counter = 0;
  for (let outerCount = 0; outerCount < seriesCount; outerCount++) {
    for (let innerCount = 0; innerCount < 4; innerCount++) {
      const stringToBePrinted = printArraySeries[counter]
        .toString()
        .padStart(3, "0");
      dynamicString += `<span>${stringToBePrinted}</span>`;
      if (counter === printArraySeries.length - 1) {
        counter = 0;
      } else {
        counter += 1;
      }
    }
    dynamicString += "<br/>";
  }
  seq.innerHTML = dynamicString;
}

function printReverseSeries5() {
  const seq = document.getElementById("sequence");
  let dynamicString = "";
  let rowToBePrinted = 6;
  let columnsToBePrinted = 8;
  for (let row = 0; row < rowToBePrinted; row++) {
    for (let column = 0; column < columnsToBePrinted; column++) {
      if (
        row === 0 ||
        column === 0 ||
        row === rowToBePrinted - 1 ||
        column === columnsToBePrinted - 1
      ) {
        dynamicString += `<span>*</span>`;
      } else {
        dynamicString += `<span></span>`;
      }
    }
    dynamicString += "<br/>";
  }
  seq.innerHTML = dynamicString;
}

function printReverseSeries6() {
  const rowsToBePrinted = 6;
  const columnsToBePrinted = 6;
  let dynamicString = "";
  const seq = document.getElementById("sequence");
  for (let row = 1; row <= rowsToBePrinted; row++) {
    for (let space = rowsToBePrinted - row; space >= 0; space--) {
      dynamicString += `<span></span>`;
    }
    for (let leftColumn = 1; leftColumn <= row; leftColumn++) {
      dynamicString += `<span>*</span>`;
    }
    for (let rightColumn = 1; rightColumn <= row - 1; rightColumn++) {
      dynamicString += `<span>*</span>`;
    }
    dynamicString += "<br/>";
  }
  seq.innerHTML = dynamicString;
}

function createTable() {
  const table = document.createElement("table");
  const tableContainer = document.getElementById("tableUsingJS");
  tableContainer.appendChild(table);
  const tr = document.createElement("tr");
  table.appendChild(tr);
  for (let headerCount = 0; headerCount < 5; headerCount++) {
    const th = document.createElement("th");
    th.innerHTML = "Title";
    tr.appendChild(th);
  }
  for (let rowCount = 0; rowCount < 10; rowCount++) {
    const tr = document.createElement("tr");
    table.appendChild(tr);

    for (let colCount = 0; colCount < 5; colCount++) {
      const td = document.createElement("td");
      td.innerHTML = "Sample";
      tr.appendChild(td);
    }
  }
}

function createTableUsingInsert() {
  var stateArray = [
    { state: "Tamil Nadu", capital: "Chennai" },
    { state: "Kerala", capital: "Trivandrum" },
    { state: "Maharashtra", capital: "Mumbai" },
  ];
  const table = document.getElementById("table3");
  for (let rowCount = 0; rowCount < stateArray.length; rowCount++) {
    const row = table.insertRow(table.rows.length);
    row.id = rowCount + 1;
    const cell1 = row.insertCell(0);
    cell1.innerHTML = stateArray[rowCount].state;
    const cell2 = row.insertCell(1);
    cell2.innerHTML = stateArray[rowCount].capital;
    const cell3 = row.insertCell(2);
    cell3.innerHTML = "<button onclick='onEdit(this)'>EDIT</button>";
    const cell4 = row.insertCell(3);
    cell4.innerHTML = "<button onclick='onDelete(this)'>DELETE</button>";
  }
}

// function onDelete(selectedRow) {
//   const tableRef = document.getElementById("table3");
//   tableRef.deleteRow(selectedRow.parentElement.parentElement.rowIndex);
// }

function printReverseSeries7() {
  const seq = document.getElementById("sequence");
  let dynamicString = "";
  for (let innerCount = 0; innerCount < 5; innerCount++) {
    for (let outerCount = 0; outerCount < 5; outerCount++) {
      if (
        innerCount === 0 ||
        outerCount === 0 ||
        innerCount === 4 ||
        outerCount === 4
      ) {
        dynamicString = dynamicString + "<span>*</span>";
      } else {
        dynamicString = dynamicString + "<span></span>";
      }
    }
    dynamicString += "<br/>";
  }
  seq.innerHTML = dynamicString;
}

function printReverseSeries8() {
  const seq = document.getElementById("sequence");
  const seriesCount = Number(document.getElementById("seriesCount").value);
  let dynamicString = "";
  for (let row = 1; row <= seriesCount; row++) {
    for (let space = 1; space <= seriesCount - row; space++) {
      dynamicString = dynamicString + "<span>&nbsp;</span>";
    }
    for (let column = 1; column <= row; column++) {
      dynamicString = dynamicString + `<span>${row}</span>`;
    }
    dynamicString += "<br/>";
  }

  for (let row = seriesCount - 1; row >= 0; row--) {
    for (let space = 1; space <= seriesCount - row; space++) {
      dynamicString = dynamicString + "<span>&nbsp;</span>";
    }
    for (let column = 1; column <= row; column++) {
      dynamicString = dynamicString + `<span>${row}</span>`;
    }
    dynamicString += "<br/>";
  }
  seq.innerHTML = dynamicString;
}
