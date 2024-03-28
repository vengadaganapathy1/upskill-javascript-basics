/**
String length - Will give string length - no of characters?
String charAt() - Will give char at specified index
String charCodeAt() - will give ASCII/ UTF-8 value for given index, A - 65, a - 97
String at() - Will give char at specified index and will support negative values as well. 
              at(-2) and charAt(length - 2) are same
String [ ]
  arr = [1,2,3,4]  arr[0] => 1, arr[1] => 2 arr[2] = 5; => [1,2,5,4]
  str = 'Upskill' str[0] => 'U' str[1] = 'p' str[2] = 'z'; 
    string [] will return the char at specified index, 
    but we cannot assign/update a char using str[index] = 'z';
    we can only read the values using [] operator
String slice() will cut string from given start index to end index
    if endIndex not provided, it will take length as end index
    slice(5, 10) - will cut from 5 to 10
    slice(5) - will cut from 5 to string length
    ("test string").slice(-4) => ring
    ("test string").slice(-4, -1) => rin
String substring()
  same as slice, but it will take as 0 if negative values was provided
  only difference is "test string".substring(-5, 5) => substring(0, 5)
String substr()
  start index, count to split
  "test string".substr(3, 4) => 't st'
  it will allow negative values
  second parameter will be used to count no of characters needed.
String Search Methods
String Templates
String toUpperCase()
  converts to Upper case
String toLowerCase()
  convert to lower case
String concat()
  will append two string
  "Hello".concat('-', "world") => Hello-world
String trim()
  will remove the spaces at the start and end and not in middle
  "    test    " => "test"
String trimStart()
  will remove the spaces at the start
  "    test    " => "test    "
String trimEnd() 
  will remove the spaces at the end
  "    test    " => "   test"
String padStart()
  will show 
    parameter specified in the first argument will take the no
       of characters to be printed
    second parameter - replace string
    '89396'.padEnd(10, 'X')
    it will work only for string
    original string will not get disturbed, so assign the updated value to another string and 
      use accordingly
String padEnd()
String repeat()
  will repeat the given string based on the input passed
  "Hello".repeat(5) => HelloHelloHelloHelloHello
String replace() 
  will replace the specified chars with replace text
  replace('replaceText', 'toBeReplacedText')
  will replace only the first occurance
  to replace all /replaceText/g - global
  to ignoreCase /replaceText/i - ignore case
String replaceAll()
  will replace all its occurance
String split()
  converts string to array
  if the split parameter not available in the search string - ??
  entire string will be added as first element in the array
  ("Welcome to class !").split(' ') => ['Welcome', 'to', 'class', '!']
  ("Welcome to class !").split('-') => ['Welcome to class !']
 */

var textValue;
var courseArray = ["HTML 5", "CSS 3", "JavaScript"];
function loadDefaultValues() {
  textValue = document.getElementById("textElement").innerHTML;
  document.getElementById("displayCourse").innerHTML = courseArray.toString();
}

function findStringLength() {
  alert(textValue.length);
}

function findCharAt() {
  alert(textValue.charAt(1));
}

function findCharCodeAt() {
  for (var count = 0; count < textValue.length; count++) {
    console.log(
      `Char - ${textValue.charAt(count)} Code - ${textValue.charCodeAt(count)}`
    );
  }
}

function findCharAtUsingAt() {
  alert(textValue.at(-1) + "--" + textValue.charAt(textValue.length - 1));
}

function usingSlice() {
  alert(textValue.slice(0, 5));
}

function usingSliceWithoutEndIndex() {
  alert(textValue.slice(10));
}

function usingSliceWithoutEndIndexAndNegative() {
  alert(textValue.slice(-4));
}

function usingSliceWithNegative() {
  alert(textValue.slice(-3, -1));
}

function usingArrayOperator() {
  alert(textValue[0] + " -- " + textValue[textValue.length - 1]);
  //a[0] = "1";
  // ABCDEF,......
  // We cannot replace using [] opt. We can only read the values. For updating we can use
  // replace or replaceAll
  alert(textValue.replace("A", "1"));
}

function usingSubString() {
  alert(textValue.substring(1, 5));
}

function usingSubStringWithInvalidIndex() {
  alert(textValue.substring(-2, 5));
}

function usingSubStr() {
  alert(textValue.substr(-10, 5));
}

function searchCourse() {
  var enteredInput = document.getElementById("courseInput").value;

  // var courseArrayString = courseArray.toString();
  // ['HTML 5', 'CSS 3', 'JavaScript'] => "HTML 5, CSS 3, JavaScript"
  // var toUpper = courseArrayString.toUpperCase();
  // => "HTML 5, CSS 3, JAVASCRIPT"
  // remove spaces
  // replace(/ /g, "") => "HTML5, CSS3, JAVASCRIPT"
  // var toArray = toUpper.split(",");
  // => ['HTML5', 'CSS3', 'JAVASCRIPT']

  var convertAllArrayElementsToUpperCase = courseArray
    .toString()
    .toUpperCase()
    .replace(/ /g, "")
    .split(",");
  // => ['HTML5', 'CSS3', 'JAVASCRIPT']
  alert(
    convertAllArrayElementsToUpperCase.indexOf(
      enteredInput.toUpperCase().replace(/ /g, "")
    )
  );
}

function displayPhoneNo() {
  var phoneNo = "8939662197";
  var updatedPhone = phoneNo.slice(0, 5).padEnd(10, "X");
  document.getElementById("phoneText").innerHTML = updatedPhone;
}

function displayNames(type) {
  removeAllRows();
  var candidatesName = [
    {
      name: "Narendra Modi",
      age: 70,
      constituency: "Varanasi",
      state: "Uttar Pradesh",
    },
    {
      name: "Rahul Gandhi",
      age: 50,
      constituency: "Wayanadu",
      state: "Kerala",
    },
    { name: "Kavin", age: 50, constituency: "Tuticorin", state: "Tamil Nadu" },
    {
      name: "Sharan",
      age: 12,
      constituency: "Chennai North",
      state: "Tamil Nadu",
    },
    {
      name: "Vishwa",
      age: 50,
      constituency: "Chennai South",
      state: "Tamil Nadu",
    },
    {
      name: "Vishwa 1",
      age: 16,
      constituency: "Chennai East",
      state: "Tamil Nadu",
    },
    {
      name: "Vishwa 2",
      age: 50,
      constituency: "Chennai West",
      state: "Tamil Nadu",
    },
    {
      name: "Vishwa 3",
      age: 12,
      constituency: "Chennai central",
      state: "Tamil Nadu",
    },
  ];

  var table = document.getElementById("tableRef");
  var highlightCount = 0;
  for (count = 0; count < candidatesName.length; count++) {
    if (
      type === "all" ||
      (type === "adults" && candidatesName[count].age >= 18) ||
      (type === "minorsInTN" &&
        candidatesName[count].age < 18 &&
        candidatesName[count].state === "Tamil Nadu")
    ) {
      var row = table.insertRow(table.rows.length);
      if (highlightCount % 2 === 0) {
        row.style.backgroundColor = "#d1a2d0";
      }
      highlightCount += 1;
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      cell1.innerHTML = highlightCount;
      cell2.innerHTML = candidatesName[count].name.toUpperCase();
      cell3.innerHTML = candidatesName[count].age;
      cell4.innerHTML = candidatesName[count].constituency;
      cell5.innerHTML = candidatesName[count].state;
      if (candidatesName[count].age >= 18) {
        cell6.innerHTML = "Adult";
      } else {
        cell6.innerHTML = "Minor";
        cell6.style.backgroundColor = "red";
      }
    }
  }
}

function removeAllRows() {
  var table = document.getElementById("tableRef");
  for (var count = table.rows.length - 1; count > 0; count--) {
    table.deleteRow(count);
  }
}
