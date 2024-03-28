/*
String Search Methods
String indexOf() 
    - will return the index of the specified string in search string
    - it will find the first occurance
    - we can pass position as argument to the this method
    - will return -1 if search string not found
    - 'test'.indexOf('est') => 1
    - 'test'.indexOf('est', 10) => -1
String lastIndexOf()
    - will return the last index of the specified string in search string
    - it will find the last occurance
    - 'teststststst'.indexOf('st') => 10
String search()
    - same as indexOf
    - but position cannot be given here
    - we can use regex /g or /i
    - 'testtest'.search('est') => 1
    - 'testtest'.search(/est/gi) => 1
String match()
    - can take regex .match(/test/gi)
    - returns an array
    - array contains - total matched strings
    - it will return index as well as below
       [matchedString, groups: undefined, index: 5, input: given input, length: 1]
    - it wont return index for regex case, /test/gi = > [TEST, test, Test]
String matchAll()
    - can take regex .match(/test/gi)
    - returns an iterator - we can use forEach to console the values in iterator
    - iterator contains below items
      [matchedString, groups: undefined, index: 5, input: given input, length: 1]
String includes()
    - will return true / false if the search string is found
String startsWith()
    - Will return true/ false if the search string starts with specified string
String endsWith()
    - Will return true/ false if the search string ends with specified string
 */
function usingIndexOf() {
  var content = document.getElementById("content1").innerHTML;
  alert(content.indexOf("is"));
}

function usingIndexOfAndPosition() {
  var content = document.getElementById("content1").innerHTML;
  alert(content.indexOf("is", 4));
}

function usingLastIndexOf() {
  var content = document.getElementById("content1").innerHTML;
  alert(content.lastIndexOf("is"));
}

function usingSearch() {
  var content = document.getElementById("content1").innerHTML;
  alert(content.search("is"));
}

function usingSearchRegex() {
  var content = document.getElementById("content1").innerHTML;
  alert(content.search(/IS/i));
}

function usingMatch() {
  var content2 = document.getElementById("content2").innerHTML;
  var matchedString = content2.match("ain");
  alert(matchedString.length + " --- " + matchedString.toString());
}

function usingMatchRegex() {
  var content2 = document.getElementById("content2").innerHTML;
  var matchedString = content2.match(/ain/gi);
  alert(matchedString.length + " --- " + matchedString.toString());
}

function usingMatchAll() {
  var content2 = document.getElementById("content2").innerHTML;
  var matchedString = content2.matchAll(/ain/gi);
  matchedString.forEach((element) => {
    console.log(element);
  });
}

function usingIncludes() {
  var content2 = document.getElementById("content2").innerHTML;
  var isStringFound = content2.includes("mainly");
  alert(isStringFound);
}

function usingStartsWith() {
  var content2 = "TN South";
  alert(content2.startsWith("TN"));
}

function usingEndsWith() {
  var content2 = "TN South";
  alert(content2.endsWith("South"));
}

function iteratorExample() {
  var array = ["test1", "test2", "test3"];
  // For loop example
  for (var count = 0; count < array.length; count++) {
    console.log(`Using for loop ${array[count]}`);
  }

  array.forEach((element) => {
    console.log(`Using iterator ${element}`);
  });
}

var studentObject = [
  { name: "Vishwa Fernandes", class: 5 },
  { name: "Sam Daniel", class: 5 },
  { name: "Radhika Sharathkumar", class: 5 },
  { name: "Selvan Thiru", class: 5 },
  { name: "Ram Moorthy", class: 5 },
  { name: "Matthew Daniel", class: 5 },
  { name: "Selva Moorthy", class: 5 },
  { name: "Daniel Balaji", class: 5 },
  { name: "Sharan Balaji", class: 5 },
];

function showNames() {
  removeAll();
  var ul = document.createElement("ul");
  ul.id = "ulRef";
  document.getElementById("table").appendChild(ul);
  studentObject.forEach((element, index) => {
    var li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = `${index + 1} ${element.name}`;
  });
}

function removeAll() {
  if (document.getElementById("table").hasChildNodes()) {
    document
      .getElementById("table")
      .removeChild(document.getElementById("ulRef"));
  }
}

function showLastName() {
  removeAll();
  var ul = document.createElement("ul");
  ul.id = "ulRef";
  document.getElementById("table").appendChild(ul);
  studentObject.forEach((element, index) => {
    var li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = `${element.name.split(" ")[1]}`;
  });
}
