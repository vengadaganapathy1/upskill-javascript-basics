/*
    Array methods
        array = [1, 2, 3, 5]
        array[i] index array[0]
        length
        push - Insert at last
        pop - Removes at end
        concat
          merge two arrays arr  = [1, 3]; arr1 = [3, 4];  arr2 = [7, 8]
          arr.concat(arr1) =? [1, 3, 3, 4]
          arr.concat(arr1, arr2) =? [1, 3, 3, 4, 7, 8]
          arr.concat(89) is also possible -> [1, 3, 89]
        slice - slice(startIndex, endIndex) -
            Will slice from start index to end index
            original array will not get disturbed
            var arr = [1, 2,3,4] var arr1 = slice(1,2) => [2]
        splice - slice(startIndex, deleteCount) -
            Will slice from start index to count mentioned
            original array will get disturbed
            will add elements as well in the deleted place
            var arr = [1, 2,3,4] var arr1 = splice(1,2) => arr => [1, 4] arr1 => [2,3]
        toSpliced - Original array will not get disturbed
            var arr = [1, 2,3,4] var arr1 = toSpliced(1,2) => arr => [1,2,3, 4] arr1 => [2,3]
        indexOf array.indexOf(4) -> 3
          will return -1 if value not found in the array
        at(5) => will return the value at index 5
        toString() => converts array to string => [5, 6, 7 ] -> '5, 6, 7'
        join() -> Behaves like .toString() and we can add a separator
          arr = [4, 5] arr.join() '4, 5'
          arr = [4, 5] arr.join('-') '4 - 5'
        shift -> similar to pop but first element will be removed
              first element will be removed
        unshift -> similar to push but element will be added at the first
              will be added at the first 
        copywithin array.copyWithin(2, 0)- Will replace all element from index 2 
          and values from index 0 will be copied
          does not add items to the array
          does not change the length of the array
        flat -> will convert inner array to top array
          [1, [2, 3], 7, 8] => [1, 2, 3, 7 , 8]
          array.flat()  default is 1
          [1, [2, [3, 4]]] => [1, 2, 3, 4]
          array.flat(2) , where 2 is the depth and will go two level depth and move all the inner arrays to top
          array.flat(3) , where 3 is the depth and will go three level depth and move all the inner arrays to top
          [1, [2, [3, [4, 5]]]] => [1, 2, 3, 4]
        localStorage
          will be saved in local memory of the system
          localStorage.setItem('key', value)
          localStorage.getItem('key')
          toString will be used to convert array to string
          In localStorage -> value will be saved as a string
          String to array => split(',')
          '1, 2, 4' => [1, 2, 3]
        Object array -> [{
          city: 'Chennai',
          state: 'Tamil Nadu',
          country: India
        }, {
          city: 'Bangalore',
          state: 'Karnataka',
          country: India
        }]
        placeholder = help text
        JSON - JavaScript Object Notation
          - Structure to represent multiple values as key , value pair
        var jsonElement = [{name: 'Thomas'}, {name: 'Stephen'}, {name: 'Martin'}]
        JSON.stringify(jsonElement) => var jsonString = "[{name: 'Thomas'}, {name: 'Stephen'}, {name: 'Martin'}]"
        JSON.parse(jsonString)

        var tableRef = document.getElementById('tableId');
        var row = tableRef.insertRow(x)
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        cell1.innerHTMl = 'Content 1';

        localStorage.removeItem(key);
        localStorage.clear();

        sessionStorage
          stored values will get cleared on browser close
          sessionStorage.setItem
          sessionStorage.getItem
 */
function arrayMethodsSet1() {
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
  var subArray = array.slice(7, 9); // 8. 9
  console.log(subArray, array);

  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var subArray = array.splice(0, 100);
  console.log(subArray, array);

  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var subArray = array.splice(2, 4); // 1, 2, 7, 8 , 9, 10
  console.log(subArray, array);

  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var subArray = array.splice(2, 4, 22, 33); // 1, 2, 22, 33 ,7, 8 , 9, 10
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

function arrayMethodsSet2() {
  var array = [3, 5, 89, 91, 103, 4, 5];
  console.log("Index of", array.indexOf(89)); // returns 2
  console.log("Index of", array.indexOf(1035)); // returns -1

  var array = [3, 5, 89, 91, 103, 4, 5, 5, 5];
  console.log("Index of 5 ------------   " + array.indexOf(5)); // returns 1
  console.log("Last index of 5 ------------   " + array.lastIndexOf(5)); // returns 1
  console.log("To string", array.toString()); // [3, 5.....] => 3, 5, 89, ...
  console.log("Array at", array.at(4)); // [3, 5.....] => 3, 5, 89, ...
  console.log(array);
  console.log("Join", array.join());
  console.log("Join with separator", array.join("-"));
  console.log("Before shift", array);
  array.shift();
  console.log("After shift", array);
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log("Before unshift", fruits);
  fruits.unshift("Lemon");
  console.log("After unshift", fruits);

  const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
  fruits1[0] = "Kiwi";
  console.log("After reassigning", fruits1);

  const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Guava"];
  console.log(fruits2.copyWithin(2, 0)); // ['Banana', 'Orange', 'Banana', 'Orange', 'Apple']

  const fruits3 = ["Banana", "Orange", "Apple", "Mango", "Guava"];
  console.log(fruits3.copyWithin(2, 3)); // ['Banana', 'Orange', 'Mango', 'Guava', 'Guava']

  const myArr = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  const newArr = myArr.flat();
  console.log(newArr);

  const myArr1 = [
    [1, 2],
    [3, 4],
    [5, [11, 22, 33]],
  ];
  const newArr1 = myArr1.flat(); // default is 1
  const newArr2 = myArr1.flat(2);
  console.log(newArr1); // will return [1, 2, 3, 4, 5, [11, 22, 33]]
  console.log(newArr2); // will return [1, 2, 3, 4, 5, 11, 22, 33]

  let months = ["Jan", "Feb", "Mar", "Apr"];
  let updatedMonths = months.splice(0, 1);
  console.log(months, updatedMonths); // months => ['Feb', 'Mar', 'Apr']
  months = ["Jan", "Feb", "Mar", "Apr"];
  var spliced = months.toSpliced(0, 1);
  console.log(months, spliced); // months => ['Jan ','Feb', 'Mar', 'Apr']
}

var array = ["JavaScript", "HTML 5", "CSS 3", "Bootstrap"];
function displayUpdatedArray() {
  document.getElementById("displayArray").innerHTML = array;
}

function findElementInArray() {
  var enteredInput = document.getElementById("input2").value;

  if (array.indexOf(enteredInput) === -1) {
    alert("Entered element is not available");
  } else {
    alert("Entered element is available");
  }
}

function alertElementAt() {
  var enteredInput = document.getElementById("input1").value;
  alert(array.at(enteredInput));
}

function insertIntoArray() {
  var enteredInput = document.getElementById("input3").value;
  array.push(enteredInput);
  displayUpdatedArray();
  document.getElementById("input3").value = "";
}

function removeFromArray() {
  var enteredInput = document.getElementById("input4").value;
  var findIndex = array.indexOf(enteredInput);
  if (findIndex !== -1) {
    array.splice(findIndex, 1);
    displayUpdatedArray();
    document.getElementById("input4").value = "";
  } else {
    alert("Entry not found");
  }
}

function addArray() {
  var newArray = [];

  var enteredInput1 = document.getElementById("input5").value;
  var enteredInput2 = document.getElementById("input6").value;
  var enteredInput3 = document.getElementById("input7").value;
  var enteredInput4 = document.getElementById("input8").value;

  newArray.push(enteredInput1);
  newArray.push(enteredInput2);
  newArray.push(enteredInput3);
  newArray.push(enteredInput4);

  document.getElementById("input5").value = "";
  document.getElementById("input6").value = "";
  document.getElementById("input7").value = "";
  document.getElementById("input8").value = "";

  array = array.concat(newArray);
  displayUpdatedArray();
}

function addArrayOptimized() {
  // Optimized code
  var newArray = [];
  var collection = document.getElementsByClassName("inputEle");
  for (var count = 0; count < collection.length; count++) {
    var inputEle = collection[count];
    newArray.push(inputEle.value);
    inputEle.value = "";
  }
  array = array.concat(newArray);
  displayUpdatedArray();
}

function createTable() {
  // Find a <table> element with id="myTable":
  var table = document.getElementById("courseList");

  for (var count = 0; count < 5; count++) {
    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(table.length);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    // Add some text to the new cells:
    cell1.innerHTML = "Course";
    cell2.innerHTML = "location";
    cell3.innerHTML = "State";
  }
}

var courseList = [];
function addCourse() {
  /* Key value pair 
  [1, 2,3]
  [{
    course: 'JS',
    city: 'Chennai',
    state: 'TN'
  }, {
    course: 'HTML',
    city: 'Bangalore',
    state: 'KA'
  }, {
    course: 'CSS',
    city: 'Hyderabad',
    state: 'TL'
  }]*/
  var courseObj = {};
  courseObj.course = document.getElementById("course").value;
  courseObj.city = document.getElementById("city").value;
  courseObj.state = document.getElementById("state").value;
  courseList.push(courseObj);
  updateTable(courseObj);
}

function updateTable(courseObj) {
  var table = document.getElementById("courseList");
  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = table.insertRow(table.length);

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  // Add some text to the new cells:
  cell1.innerHTML = courseObj.course;
  cell2.innerHTML = courseObj.city;
  cell3.innerHTML = courseObj.state;

  document.getElementById("course").value = "";
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
}

function onSubmit() {
  var enteredInput = document.getElementById("nameElement").value;
  localStorage.setItem("name", enteredInput);
}

function displayName() {
  var savedName = localStorage.getItem("name");
  var displayName =
    savedName !== null && savedName !== "" ? savedName : "Student";
  alert(`Welcome ${displayName} !`);
}

var studentMarksArray = [88, 89, 90, 91, 92];
var total = 0;
var passOrFail = "PASS";
var message = "";
for (count = 0; count < studentMarksArray.length; count++) {
  console.log(`Subject Mark ${count + 1} - ${studentMarksArray[count]}`);
  total = total + studentMarksArray[count];
  if (studentMarksArray[count] < 40) {
    passOrFail = "FAIL";
  }
}
console.log(`Total - ${total}`);
console.log(`Result - ${passOrFail}`);
// ternary opt
message =
  passOrFail === "PASS"
    ? "Congratulations !"
    : "Good try! Better luck next time !";
console.log(message);

// Reverse print

for (count = studentMarksArray.length - 1; count >= 0; count--) {
  // count , length - count
  // 4 5-4
  // 3 5-3
  // 2 5-2
  // 1 5-1
  // 0 5-0
  console.log(
    `Subject Mark ${studentMarksArray.length - count} - ${
      studentMarksArray[count]
    }`
  );
}

var cityArray = [];
if (localStorage.getItem("cityArrayKey") !== null) {
  var readFromStorage = localStorage.getItem("cityArrayKey");
  cityArray = readFromStorage.split(",");
} else {
  cityArray = [
    "Chennai",
    "Hyderabad",
    "Trivandrum",
    "Bangalore",
    "Gandhi Nagar",
  ];
}

function displayCities() {
  document.getElementById("displayArray").innerHTML = cityArray;
  saveToLocalStorage();

  loadAddedLocationDetails();
  updateNoOfClicks();
}

function addCity() {
  var enteredValue = document.getElementById("input1").value;
  if (cityArray.indexOf(enteredValue) === -1) {
    cityArray.push(enteredValue);
    displayCities();
    document.getElementById("input1").value = "";
    saveToLocalStorage();
  } else {
    alert(`${enteredValue} already exists`);
  }
}

function removeLastCity() {
  cityArray.pop();
  console.log(cityArray);
  displayCities();
}

function addAllCities() {
  var newlyCreatedArray = [];
  var city1 = document.getElementById("city1").value;
  var city2 = document.getElementById("city2").value;
  var city3 = document.getElementById("city3").value;
  var city4 = document.getElementById("city4").value;
  newlyCreatedArray.push(city1);
  newlyCreatedArray.push(city2);
  newlyCreatedArray.push(city3);
  newlyCreatedArray.push(city4);
  cityArray = cityArray.concat(newlyCreatedArray);
  document.getElementById("city1").value = "";
  document.getElementById("city2").value = "";
  document.getElementById("city3").value = "";
  document.getElementById("city4").value = "";
  displayCities();
}

function onSlice() {
  var sIndex = document.getElementById("sliceStartIndex").value;
  var endIndex = document.getElementById("sliceEndIndex").value;
  var slicedValue = cityArray.slice(sIndex, endIndex);
  alert(slicedValue);
}

function onDelete() {
  var cityToBeDeleted = document.getElementById("deleteCity").value;
  cityArray.splice(cityArray.indexOf(cityToBeDeleted), 1);
  displayCities();
}

function saveToLocalStorage() {
  localStorage.setItem("cityArrayKey", cityArray.toString());
}

function removeItemFromStorage() {
  cityArray = [];
  localStorage.removeItem("cityArrayKey");
  displayCities();
}

function findCityAtIndex() {
  var enteredIndex = document.getElementById("indexElement").value;
  alert(cityArray.at(enteredIndex));
}

function removeAndAddCity() {
  var cityToBeDeleted = document.getElementById("cityToBeRemoved").value;
  var cityToBeAdded = document.getElementById("cityToBeAdded").value;
  var indexOfDelete = cityArray.indexOf(cityToBeDeleted);
  cityArray.splice(indexOfDelete, 1, cityToBeAdded);
  displayCities();
}

var locationArray = [];
if (localStorage.getItem("location") !== null) {
  locationArray = JSON.parse(localStorage.getItem("location"));
}
// pushing an object to an array
function addLocationDetails() {
  var enteredCity = document.getElementById("cityElement").value;
  var enteredState = document.getElementById("stateElement").value;
  var enteredCountry = document.getElementById("countryElement").value;
  var locationObject = {
    city: enteredCity,
    state: enteredState,
    country: enteredCountry,
  };
  locationArray.push(locationObject);
  document.getElementById("cityElement").value = "";
  document.getElementById("stateElement").value = "";
  document.getElementById("countryElement").value = "";
  localStorage.setItem("location", JSON.stringify(locationArray));
  updateTableDetails(locationObject);
}

function updateTableDetails(locationObject) {
  // var row = tableRef.insertRow(tableRef.length);
  // var cell1 = row.insertCell(0);
  // var cell2 = row.insertCell(1);
  // var cell3 = row.insertCell(2);
  // cell1.innerHTML = locationObject.city;
  // cell2.innerHTML = locationObject.state;
  // cell3.innerHTML = locationObject.country;
  displayRow(locationObject);
}

function loadAddedLocationDetails() {
  var alreadyAddedLocationDetails = [];
  if (localStorage.getItem("location") !== null) {
    alreadyAddedLocationDetails = JSON.parse(localStorage.getItem("location"));
  }
  for (var count = 0; count < alreadyAddedLocationDetails.length; count++) {
    // var row = tableRef.insertRow(tableRef.length);
    // var cell1 = row.insertCell(0);
    // var cell2 = row.insertCell(1);
    // var cell3 = row.insertCell(2);
    // cell1.innerHTML = alreadyAddedLocationDetails[count].city;
    // cell2.innerHTML = alreadyAddedLocationDetails[count].state;
    // cell3.innerHTML = alreadyAddedLocationDetails[count].country;
    displayRow(alreadyAddedLocationDetails[count]);
  }
}

function displayRow(row) {
  var tableRef = document.getElementById("locationGrid");
  var row = tableRef.insertRow(tableRef.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = row.city;
  cell2.innerHTML = row.state;
  cell3.innerHTML = row.country;
}

var noOfClicks;
function countClickAction() {
  noOfClicks += 1;
  sessionStorage.setItem("clickCount", noOfClicks);
  displayNoOfClicksMade();
}

function updateNoOfClicks() {
  if (sessionStorage.getItem("clickCount") !== null) {
    noOfClicks = Number(sessionStorage.getItem("clickCount"));
  } else {
    noOfClicks = 0;
  }
  displayNoOfClicksMade();
}

function displayNoOfClicksMade() {
  document.getElementById("clicks").innerHTML =
    sessionStorage.getItem("clickCount");
}
