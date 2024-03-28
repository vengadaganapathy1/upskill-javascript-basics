function hello() {
  console.log("Hi! welcome to the session");
}

var array = [1, 2, 3, 4];

for (let count = 0; count < 10; count = count + 5) {
  console.log(count);
}

let total = 0;
for (let count = 0; count < array.length; count++) {
  total = total + array[count];
  console.log("index ", array[count]);
}
console.log("total - ", total);

for (let count = array.length - 1; count >= 0; count--) {
  console.log(array[count]);
}

var studentArray = [
  { name: "Student 1", score: 97 },
  { name: "Student 2", score: 90 },
  { name: "Student 3", score: 45 },
];

studentArray.forEach(printName);
function printName(studentDetails) {
  console.log(studentDetails.name, studentDetails.score);
}

for (let count = 0; count < studentArray.length; count++) {
  console.log(studentArray[count].name, studentArray[count].score);
}

function add(value1, value2) {
  console.log(value1 + value2);
}

add(5, 4);

const nameProperty = "name";
const teacherNameProperty = "teachersName";
var obj = {
  name: "XX",
  class: 5,
  school: "SVD",
  // teachersName: 'XY'
};
console.log(obj.name);
console.log(obj["name"]);
console.log(obj[nameProperty]);
obj.section = "A";
obj["gender"] = "Male";
obj[teacherNameProperty] = "ABC";
console.log(obj);

let i = 0;
console.log(i);
while (i < 10) {
  i = i + 1;
}

let j = 0;
do {
  j = j + 1;
  console.log(j);
} while (j < 10);

var arr = [11, 22, 33, 44];
for (x of arr) {
  console.log(x);
}

for (x in arr) {
  console.log(x);
}

var obj1 = {
  name: "111",
  class: "6",
};

for (key in obj1) {
  console.log(key, obj1[key]);
}
