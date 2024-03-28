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
    var row = table.insertRow(table.length);
    row.id = (count + 1).toString();
    row.insertCell(0).innerHTML = studentObject[count].name;
    row.insertCell(1).innerHTML = studentObject[count].class;
    row.insertCell(2).innerHTML =
      "<button onclick='onEdit(this)'>Edit</button>";
    row.insertCell(3).innerHTML =
      "<button onclick='onDelete(this)'>Delete</button>";
  }
}

function createRow() {
  var table = document.getElementById("tableData");
  var row = table.insertRow(table.length);
  row.insertCell(0).innerHTML = document.getElementById("nameField").value;
  row.insertCell(1).innerHTML = document.getElementById("classField").value;
  row.insertCell(2).innerHTML =
    "<button onclick='onDelete(this)'>Delete</button>";
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
