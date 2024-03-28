/* 
Usage of this

this refers to Global Object (window) when used inside an arrow function
var name = 'test';
let getName = (() => {
  return `Hello ${name}`
});
The above will print Hello test.

But, the below will print Hello . 
let name = 'test';
let getName = (() => {
  return `Hello ${name}`
});

this refers the current object, if used inside objects
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
}; 
*/

function onClickFromHTML() {
  alert("Called from HTML");
}
const btn = document.createElement("button");
function onLoadComplete() {
  const btnCont = document.getElementById("buttonContainer");
  btn.id = "btn2";
  btn.innerHTML = "Click Me";
  btnCont.appendChild(btn);

  btn.addEventListener("click", onClickFromJS);
  btn.addEventListener("mouseover", onMouseOver);
  btn.addEventListener("mouseout", onMouseOut);
}

function onClickFromJS(event) {
  alert("Called from JS");
}

function onMouseOver() {
  const btn = document.getElementById("btn2");
  btn.title = "JS Message";
}

function onMouseOut() {
  const btn = document.getElementById("btn2");
  btn.title = "";
}

var arrayObject = [
  { name: "Member 1", idNo: 95, state: "TN", gender: "Male" },
  { name: "Member 2", idNo: 50, state: "TL", gender: "Male" },
  { name: "Member 3", idNo: 70, state: "AP", gender: "Male" },
  { name: "Member 4", idNo: 67, state: "KL", gender: "Male" },
  { name: "Member 5", idNo: 85, state: "KA", gender: "Male" },
  { name: "Member 6", idNo: 96, state: "TN", gender: "Female" },
  { name: "Member 7", idNo: 32, state: "TL", gender: "Female" },
  { name: "Member 8", idNo: 98, state: "AP", gender: "Female" },
  { name: "Member 9", idNo: 99, state: "KL", gender: "Female" },
  { name: "Member 10", idNo: 34, state: "KA", gender: "Female" },
];

arrayObject.forEach((row, index) => {
  console.log(index);
  if (row.state === "TN" && row.gender === "Male") {
    console.log(row.name);
  }
});

console.log("-------------");
for (let i = 0; i < arrayObject.length; i++) {
  console.log(i);
  if (arrayObject[i].state === "TN" && arrayObject[i].gender === "Male") {
    console.log(arrayObject[i].name);
  }
}
console.log("-------------");
let filteredArrayObject = arrayObject.filter((row, index) => {
  return row.state === "TN" && row.gender === "Male";
});
filteredArrayObject.forEach((row, index) => {
  console.log(index);
  console.log(row.name);
});

let mappedArrayObject = arrayObject.map((row, index) => {
  return {
    name: row.name,
    idNo: row.idNo,
    state: row.state,
    gender: row.gender.startsWith("M") ? "M" : "F",
  };
});

console.log(mappedArrayObject);

var studentObject = [
  {
    firstName: "Mark",
    lastName: "Stephen",
    id: 95,
    score: [
      {
        maths: 90,
        science: 45,
      },
    ],
    school: "SKMSVM",
    fullName: "",
  },
  {
    firstName: "Mark 1",
    lastName: "Stephen 1",
    id: 96,
    score: [
      {
        maths: 99,
        science: 45,
      },
    ],
    school: "SKMSVM",
    fullName: "",
  },
  {
    firstName: "Mark 2",
    lastName: "Stephen 2",
    id: 97,
    score: [
      {
        maths: 100,
        science: 45,
      },
    ],
    school: "SKMSVM",
    fullName: "",
  },
];

var updatedValue = studentObject.filter((row, index, fullValue) => {
  return row.score[0].maths === 100;
});

console.log(studentObject);

let x;
function increment() {
  x = "1";
  x++;
}
increment();
console.log(x);

// 432
// [1, 2 , 4]
// { name: 'Skill'}
const numbers = [175, 50, 25];
// [350, 100, 50]
console.log(numbers.reduce(myFunc, []));

function myFunc(pV, cV, cI) {
  pV.push(cV * 2);
  return pV;
}
// [350, 100, 50]

var store = [0, 1, 2, 3, 4];

var stored = store.reduce(function (pV, cV, cI) {
  pV.push(cV * 2);
  return pV;
}, []);
console.log(stored);

var stored = store.reduce((pV, cV, cI) => {
  pV.push(cV * 2);
  return pV;
}, []);
console.log(stored);

var stored = store.reduce(function (pV, cV, cI) {
  pV = pV + cV;
  return pV;
}, 0);

console.log(stored);

var numberArray = [1, 2, 3, 4, 5, 6];

let newNumberArray1 = numberArray.map((no) => {
  return no * 2;
});

console.log(numberArray, newNumberArray1);

let newNumberArray2 = numberArray.map(function (no) {
  return no * 2;
});
console.log(numberArray, newNumberArray2);

let newNumberArray3 = numberArray.map(double);
console.log(numberArray, newNumberArray3);

function double(no) {
  return no * 2;
}

var numberArray1 = [0, 1, 2, 3, 4, 5];
let newNumberArray4 = numberArray1.map((val) => {
  return val ** 2;
});
let newNumberArray5 = numberArray1.map((val) => val ** 2);

console.log(newNumberArray4, newNumberArray5);

let newNumberArray6 = numberArray1.filter((val) => {
  return val % 2 === 0;
});
console.log(newNumberArray6);
let newNumberArray7 = numberArray1
  .filter((val) => {
    return val % 2 === 0;
  })
  .map((val) => {
    return val ** 2;
  });

console.log(newNumberArray7);

let directionArray = ["EAST", "WEST", "north", "south"];
// ["EAST", "WEST", "north", "south"]

var xx = [1, 2, 3, 4];
for (x in xx) {
  console.log(xx[x]);
}

const arr = [1, 2, 3, 4, 5];
let sliced = arr.slice(0, 2);
console.log(sliced);

const obj = { name: "Tech", class: 5 };
obj.school = "SKM";
console.log(obj);

let a = 10;
let b = 5;
a = 50;
{
  let a = 20;
  let b = 10;
  console.log(a, b);
}
console.log(a, b);

var aa = 10;
var bb = 5;
var aa = 50;
{
  var aa = 20;
  var bb = 10;
  console.log(aa, bb);
}
console.log(aa, bb);

const aaa = 10;
const bbb = 5;

{
  const aaa = 20;
  const bbb = 10;
  console.log(aaa, bbb);
}
console.log(aaa, bbb);
let hoistedVariable;
hoistedVariable = 45;
console.log(hoistedVariable);

let this_a = 5;
var calculate = () => {
  console.log(this.this_a);
};

function calculate1() {
  console.log(this.this_a);
}

calculate();
calculate1();

function add(a, b) {
  console.log(this);
  return a + b;
}

let add1 = (a, b) => {
  console.log(this);
  return a + b;
};

console.log(add(4, 5));
console.log(add1(4, 5));

// Create an object:
firstName = "Outer name";
lastName = "Last name";
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());

var name = "Ganapathy";
let greeting = () => {
  return `Hello ${this.name}`;
};
let xxx = greeting();
console.log(xxx);

var reduceArray = [1, 3, 8, 5, 6];
var total = 0;
for (let count = 0; count < reduceArray.length; count++) {
  total = total + reduceArray[count];
}
console.log(total);

var total1 = 0;
reduceArray.forEach((val) => {});
let updatedValue1 = reduceArray.map((val) => {
  total1 = total1 + val;
});
console.log(total1);

var reduceArrayVal = reduceArray.reduce(findTotal, 0);
function findTotal(previousValue, currentValue, index, fullArray) {
  return previousValue + currentValue;
}
console.log(reduceArrayVal);

var reduceArrayVal2 = reduceArray.reduce((pV, cV) => {
  return pV + cV;
}, 0);
console.log(reduceArrayVal2);

let reduceArray1 = [1, 4, 5];
let reduceArray3 = reduceArray1.reduce((pV, cV, index, array) => {
  pV.push(cV ** 2);
  return pV;
}, []);
console.log(reduceArray3);

var test = [1, 6, 8];
var result = [];
for (let count = 0; count < test.length; count++) {
  result.push(test[count] ** 2);
}
console.log(result);

var studentDetails = [
  {
    name: "Arshith",
    class: 2,
    school: "SKMSVM",
    vehicle: "Van",
    marks: {
      tamil: 98,
      english: 99,
      maths: 100,
      science: 92,
      social: 99,
    },
  },
  {
    name: "Mridhula",
    class: 6,
    school: "Zion",
    vehicle: "Bicycle",
    marks: {
      tamil: 98,
      english: 99,
      maths: 99,
      science: 100,
      social: 100,
    },
  },
  {
    name: "Sam",
    class: 6,
    school: "Alwin",
    vehicle: "Bicycle",
    marks: {
      tamil: 90,
      english: 90,
      maths: 90,
      science: 90,
      social: 90,
    },
  },
  {
    name: "Anderson",
    class: 6,
    school: "Zion",
    vehicle: "Van",
    marks: {
      tamil: 99,
      english: 99,
      maths: 99,
      science: 99,
      social: 80,
    },
  },
];

studentDetails.map((student) => {
  student.id = Math.round(Math.random() * 100000);
  let totalMarks = 0;
  for (x in student.marks) {
    totalMarks = totalMarks + student.marks[x];
  }
  student.total = totalMarks;
  return student;
});

studentDetails.forEach((row) => {
  console.log(row.id, row.total);
});

let totalStudentInEachSchool = studentDetails.reduce((pV, cV, index) => {
  if (!pV[cV.school]) {
    pV[cV.school] = { name: cV.school, count: 1 };
  } else {
    pV[cV.school].count += 1;
  }
  return pV;
}, {});
console.log(totalStudentInEachSchool);

let stringArray = [
  "Chennai",
  "Madurai",
  "Coimbatore",
  "Salem",
  "Trichy",
  "Tirunelveli",
];

console.log(`Corporations in Tamil Nadu are ${stringArray.join(", ")}`);

// Corporations in Tamil Nadu are Chennai, Madurai, Coimbatore, Salem,
// Trichy, Tirunelveli
var addedString = stringArray.reduce(
  appendStrings,
  "Corporations in Tamil Nadu are"
);
function appendStrings(pV, cV, cI, values) {
  return cI === values.length - 1 ? `${pV} ${cV}` : `${pV} ${cV},`;
}
console.log(addedString);

let teamDetails = [
  { city: "Chennai", name: "ABC" },
  { city: "Chennai", name: "EFG" },
  { city: "Madurai", name: "HIJ" },
];

// {Chennai: 2, Madurai: 1}
var obj1 = {};
obj1.Madurai = 1;
obj1["Chennai"] = 1;
console.log(obj1);

const teamCount = teamDetails.reduce(findPersonsFromCity, {});

function findPersonsFromCity(pV, cV, cI, personArray) {
  if (pV[cV.city]) {
    pV[cV.city] = pV[cV.city] + 1;
  } else {
    pV[cV.city] = 1;
  }
  return pV;
}
console.log(teamCount);
/*
{}  {Chennai: 1} {Chennai: 2} {Chennai: 2, Madurai: 1}  
 */

var iplMatches = [
  { opponent1: "Chennai", opponent2: "Gujarat", winner: "Chennai" },
  { opponent1: "Chennai", opponent2: "Bangalore", winner: "Chennai" },
  { opponent1: "Delhi", opponent2: "Hyderabad", winner: "Delhi" },
  { opponent1: "Mumbai", opponent2: "Rajasthan", winner: "Mumbai" },
  { opponent1: "Hyderabad", opponent2: "Rajasthan", winner: "Rajasthan" },
];
