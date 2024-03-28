/*Let, var in for loop 
    Let - Block scope
    var - is not a block scope
    var - re declaration and re initialization possible
    let - re declaration not possible   
    for (initialization ; condition; increment/ decrement)
    initialization ; condition; increment/ decrement are all optional parameters
    let i = 0;
    for(; i< 5; ) {
        i = i + 1;
    }

    for(let i = 0; i< 5; i = i + 1) {
        i = i + 1;
    }

    for loop
    forEach
        1. using Arrow function (nameless)
        2. using named function
        3. It will work only for array
    for in
        1. If object, it will return key
        2. If array, it will return index

    Iterating an array using forEach
    [].forEach((element, index, entireArray) => {
    })
    [].forEach(getElementDetails);
    function getElementDetails(element, index, entireArray) {
    }

    for in is used to read 'Key' in case of object
    var obj = {name: 'Sridhar', class: 5};
    for( x in obj) will return name and class as String
    to access the value we need to use [''] operator
    obj[x]
    .operator and [''] operator

     for in is used to read 'index' in case of Array
     var arr = [45, 56];
     for( x in arr) => x will give index
     arr[x] to access array values

    key, value pair

    
    // var obj = {name: 'upskill'}
    // obj.name
    // obj['name']

    // var obj1 = [{name: 'upskill'}, {name: 'tech'}]
    // obj1[0].name
    // obj1[1].name
    // obj1[0]['name']
    // obj1[1]['name']

    /*
    for (key in obj) {
        console.log(key, obj[key]);
    }

    for (index in obj1) {
        console.log(index, obj1[index].name);
    }

    obj1.forEach((ele, index, allValues) => {
        console.log(element.name);
        console.log(element['name']);
    });

    obj1.forEach(newFunction);
    function newFunction(ele, index, allValues) {
        console.log(element.name);
        console.log(element['name']);
    }

    for of -> it will return the values directly
    if we execute for of for string, it will return characters individually
    for (x of ['11', '22']) {
        console.log(x); // 11 // 22
    }

    for (x of 'JAVA') {
        console.log(x); // J // A // V // A
    }
    */

var testVar = 5;
usingLetAndVar();

function usingFor() {
  for (var count = 0; count <= 5; count++) {
    // console.log(`Loop count ${count + 1}`);
  }
  // console.log("-----------------");

  for (var count = 10; count <= 50; count = count + 10) {
    // console.log(`Loop count ${count}`);
  }
  // console.log("-----------------");

  //   for (var count = 10; count % 20 === 0, count <= 50; count = count + 10) {
  //     // console.log(`Loop count  ${count} ${count % 20 === 0}`);
  //   }
  //   // console.log("-----------------");

  for (var count = 10; count > 0; count--) {
    // console.log(`Loop count ${count}`);
  }
  // console.log("-----------------");

  for (var count1 = 2, count2 = 3; count1 < 6; count1++) {
    // console.log(`Loop count ${count1} ${count2}`);
    count2 = count2 + 3;
  }
  // console.log("-----------------");
  for (var count1 = 1; count1 < 6; ) {
    // console.log(`Loop count ${count1}`);
    count1 = count1 + 1;
  }

  // console.log("-----------------");
  var count1 = 1;
  for (; count1 < 6; ) {
    // console.log(`Loop count ${count1}`);
    count1 = count1 + 1;
  }
}

function usingWhile() {
  var whileVar = 5;
  // console.log(whileVar);
}

function usingLetAndVar() {
  var count = 15;
  var count = 20;
  let count1 = 15;
  count1 = 20;
  // console.log("var 20 -> ", count);
  for (var count = 0; count < 6; count++) {
    // console.log(`Scope ${count}`);
  }
  // console.log(count);

  // console.log("let 20 -> ", count1);
  for (let count1 = 0; count1 < 6; count1++) {
    // console.log(`Scope ${count1}`);
  }
  // console.log("20 ->", count1);
}

var studentsArray = [
  { name: "Student 1", class: 11, CGPA: 4.6656 },
  { name: "Student 2", class: 12, CGPA: 9.6656 },
  { name: "Student 3", class: 11, CGPA: 6.6656 },
];
var locationArray = ["Chennai", "Coimbatore"];
var numberArray = [1, 2, 3, 4, 5];
const person = { fname: "John", lname: "Doe", age: 25, eachElement: 500 };

// console.log("Using 'For loop' for different inputs");
for (let index = 0; index < studentsArray.length; index++) {
  // console.log(studentsArray[index].name);
}

for (let index = 0; index < locationArray.length; index++) {
  // console.log(locationArray[index]);
}

for (let index = 0; index < numberArray.length; index++) {
  // console.log(numberArray[index]);
}

// For loop not possible for person object

// console.log("Using forEach and  function in Array");

studentsArray.forEach(getStudentName);
function getStudentName(student, idx, array) {
  // console.log(student.name, idx, array);
}

// console.log("********************");
locationArray.forEach(printLocation);
function printLocation(element, index, entireArray) {
  // console.log(element, index, entireArray);
}
// console.log("********************");

// console.log("Using forEach and arrow function in Array");

studentsArray.forEach((student, idx, studentArray) => {
  // console.log(student.name, idx, studentArray);
});

locationArray.forEach((location) => {
  // console.log(location);
});

numberArray.forEach((no, idx, noArray) => {
  // console.log(no);
});

// For in
// console.log("Using . opt");
// console.log(person.fname);
// console.log(person.lname);
// console.log(person.age);

// console.log("Using [''] opt");
// console.log(person["fname"]);
// console.log(person["lname"]);
// console.log(person["age"]);

let text = "";
for (let eachElement in person) {
  // console.log(typeof eachElement);
  // console.log(eachElement, person[eachElement], person.eachElement);
  text += person[eachElement] + " ";
}

// console.log(text);

const numbers = [45, 4, 9, 16, 26];
let total = 0;
for (let index in numbers) {
  // console.log(index, numbers[index]);
  total += numbers[index];
}

// console.log(total);

var responseData = [];
fetch("assets/data.json")
  .then((response) => response.json())
  .then((json) => {
    responseData = json;
    // console.log(json);
  });

function renderTable() {
  const tableCont = document.getElementById("tableContainer");
  const table = document.createElement("table");
  tableCont.appendChild(table);
  const headerRow = table.insertRow(0);
  var colCount = 0;
  var keyList = [];
  for (objectKey in responseData[0]) {
    const th = document.createElement("th");
    headerRow.append(th);
    colCount += 1;
    keyList.push(objectKey);
    th.innerHTML = objectKey.toUpperCase();
  }

  responseData.forEach((element) => {
    const row = table.insertRow(table.length);
    let rowCount = 0;
    keyList.forEach((key, index) => {
      const cell = row.insertCell(index);
      cell.innerHTML = element[key];
      rowCount += 1;
      if (index === 3) {
        cell.classList.add("w400");
      }
    });
  });
}

var array1 = [
  { name: "111", id: 1 },
  { name: "222", id: 2 },
  { name: "333", id: 3 },
  { name: "444", id: 4 },
];

var obj = { name: "111", id: 1 };

for (index in array1) {
  console.log(array1[index].name);
}

for (x in obj) {
  console.log(x);
}

var studentsObj = [
  {
    name: "Student 1",
    class: 5,
    marks: [
      {
        maths: 95,
        science: 90,
      },
    ],
  },
  {
    name: "Student 2",
    class: 5,
    marks: [
      {
        maths: 89,
        science: 90,
      },
    ],
  },
  {
    name: "Student 3",
    class: 5,
    marks: [
      {
        maths: 96,
        science: 100,
      },
    ],
  },
];

studentsObj.forEach((student, index, studentArray) => {
  console.log(student.marks[0]["maths"]);
});

console.log(studentsObj[2].marks[0]);
console.log(studentsObj[2].marks[0].maths);
console.log(studentsObj[2].marks[0].science);
console.log(studentsObj[2].marks[0]["maths"]);
console.log(studentsObj[2].marks[0]["science"]);
for (x in studentsObj[2].marks[0]) {
  console.log(studentsObj[2].marks[0][x]);
  console.log(studentsObj[2].marks[0][x]);
}

function onReady() {
  const divElement = document.getElementById("menuContainer");
  const ulElement = document.createElement("ul");
  divElement.appendChild(ulElement);

  const menuArray = ["Menu 1", "Menu 2", "Menu 3", "Menu 4"];

  menuArray.forEach((menu) => {
    const liElement1 = document.createElement("li");
    liElement1.innerHTML = menu;
    ulElement.appendChild(liElement1);
  });
}

function renderTableOptimized() {
  responseData = [
    { school: 5, studentName: "Test 1" },
    { school: 5, studentName: "Test 2" },
    { school: 5, studentName: "Test 3" },
  ];

  const tableContainerRef = document.getElementById("tableContainer");
  const tableRef = document.createElement("table");
  tableRef.id = "tableEle";
  tableContainerRef.appendChild(tableRef);
  const trEle = document.createElement("tr");
  tableRef.appendChild(trEle);

  var keyList = [];
  for (key in responseData[0]) {
    const thEle1 = document.createElement("th");
    thEle1.innerHTML = key.toUpperCase();
    keyList.push(key);
    trEle.appendChild(thEle1);
  }
  // keyList = ['name', 'language', 'id', 'bio', 'version']
  responseData.forEach((response, index) => {
    const tr = document.createElement("tr");
    tableRef.appendChild(tr);
    for (let count = 0; count < keyList.length; count++) {
      const td1 = document.createElement("td");
      td1.innerHTML = response[keyList[count]];
      tr.appendChild(td1);
    }
  });
}

var responseData1 = [];
fetch("assets/data1.json")
  .then((response) => response.json())
  .then((json) => {
    responseData1 = json;
    console.log(responseData1);

    responseData1.forEach((courseObject) => {
      for (tech in courseObject.courses) {
        courseObject.courses[tech].forEach((element) => {
          element.attendance.forEach((innerEle) => {
            console.log(
              `Name: ${innerEle.name} Attendance: ${innerEle.daysAbsent}`
            );
          });
        });
      }
    });
  });

var responseData3 = [];
fetch("assets/data3.json")
  .then((response) => response.json())
  .then((json) => {
    responseData3 = json;

    var stateTableContainer = document.getElementById("stateTableContainer");
    var tableRef = document.createElement("table");
    stateTableContainer.appendChild(tableRef);
    var headerRow = document.createElement("tr");
    tableRef.appendChild(headerRow);
    for (key in responseData3[0]) {
      var headerCell = document.createElement("th");
      headerCell.innerHTML = key.toUpperCase();
      headerRow.appendChild(headerCell);
    }

    // responseData3.sort(function (a, b) {
    //   if (a.capital < b.capital) return -1;
    //   if (a.capital > b.capital) return 1;
    // });

    responseData3.sort(function (a, b) {
      return b.ministers - a.ministers;
    });

    responseData3.forEach((stateObj) => {
      //if (stateObj.state.startsWith("T") || stateObj.state.startsWith("A")) {
      var row = document.createElement("tr");
      tableRef.appendChild(row);

      for (elements in stateObj) {
        var cell1 = document.createElement("td");
        if (
          typeof stateObj[elements] === "number" ||
          typeof stateObj[elements] === "string"
        ) {
          cell1.innerHTML = stateObj[elements];
          row.appendChild(cell1);
        } else if (typeof stateObj[elements] === "object") {
          var str = "";
          // stateObj[elements].forEach((ele, index) => {
          for (xx in stateObj[elements]) {
            console.log();
            str +=
              stateObj[elements].length - 1 === index
                ? stateObj[elements][xx].name
                : stateObj[elements][xx].name + ", ";
          }
          // });
          cell1.innerHTML = str;
          row.appendChild(cell1);
        }
      }
      // }
    });
  });

var array2 = ["123", "456", "789"];
var obj3 = { name: "123", std: "5" }; // for of , Will not work
var string1 = "Javascript";
console.log(string1[0]);
for (x of string1) {
  console.log(x);
}
