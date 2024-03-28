const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
//  "Apple","Banana", "Mango", "Orange"

fruits.reverse();
console.log(fruits);

const fruitObjectArray = [
  { name: "Banana", origin: "India" },
  { name: "Orange", origin: "US" },
  { name: "Apple", origin: "Australia" },
  { name: "Mango", origin: "Canada" },
];

fruitObjectArray.sort();
console.log(fruitObjectArray);

console.log([1, 5, 8, 9, 0, 12, 6].sort());

console.log(["1", "5", "55", "10", "0"].sort());

const months1 = ["Jan", "Feb", "Mar", "Apr"];
const sorted1 = months1.toSorted();

const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();

console.log(months1, sorted1);
console.log(months, reversed);

var points = [44, 4, 7];
points.sort(function (a, b) {
  return a - b;
});

console.log(points);

const fruitObjectArray1 = [
  { name: "Banana", origin: "India" },
  { name: "Orange", origin: "US" },
  { name: "Apple", origin: "Australia" },
  { name: "Mango", origin: "Canada" },
];

fruitObjectArray1.sort(function (p1, p2) {
  if (p1.name < p2.name) return -1;
  if (p1.name > p2.name) return 1;
});

const fruitObjectArray2 = [
  { name: 1, origin: "India" },
  { name: 45, origin: "US" },
  { name: 0, origin: "Australia" },
  { name: 8, origin: "Canada" },
];

fruitObjectArray2.sort(function (a, b) {
  return a.name - b.name;
});

console.log(fruitObjectArray2);

fruitObjectArray2.sort(function (a, b) {
  if (a.origin < b.origin) return 1;
  if (a.origin > b.origin) return -1;
});

console.log(fruitObjectArray2);

var citiesData = [];
fetch("./assets/data.json")
  .then((response) => response.json())
  .then((json) => {
    citiesData = json;
    loadCityButtons();
  });

var uniqueCities = [];

function loadCityButtons() {
  var btnCont = document.getElementById("buttonContainer");
  citiesData.forEach((cityDetails) => {
    if (uniqueCities.indexOf(cityDetails.state) === -1) {
      uniqueCities.push(cityDetails.state);
      var btn = document.createElement("button");
      btn.innerHTML = cityDetails.state;
      btn.addEventListener("click", loadCityRows);
      btnCont.appendChild(btn);
    }
  });
  loadCityTable();
}

function loadCityTable() {
  var tableCont = document.getElementById("tableContainer");
  var table = document.createElement("table");
  table.id = "cityTable";
  tableCont.appendChild(table);

  var headerRow = document.createElement("tr");

  table.appendChild(headerRow);

  for (tableName in citiesData[0]) {
    var headerCell1 = document.createElement("th");
    headerCell1.innerHTML = tableName.toUpperCase();
    headerRow.appendChild(headerCell1);
  }
}

function loadCityRows(event) {
  document.getElementById(
    "cityTitle"
  ).innerHTML = `Cities of ${event.target.innerHTML.toUpperCase()}`;
  deleteAllRows();
  var table = document.getElementById("cityTable");
  citiesData.forEach((cityDetails) => {
    if (
      event.target.innerHTML.toLowerCase() === cityDetails.state.toLowerCase()
    ) {
      var cellRow = document.createElement("tr");
      table.appendChild(cellRow);

      for (stateObjectKey in cityDetails) {
        var cell = document.createElement("td");
        cell.innerHTML = cityDetails[stateObjectKey];
        cellRow.appendChild(cell);
      }
    }
  });
  // const selectedCityRows = citiesData.filter((row) => {
  //   return row.state.toLowerCase() === event.target.innerHTML.toLowerCase();
  // });
  // selectedCityRows.forEach((row) => {
  //   var cellRow = document.createElement("tr");
  //   table.appendChild(cellRow);
  //   for (stateObjectKey in row) {
  //     var cell = document.createElement("td");
  //     cell.innerHTML = row[stateObjectKey];
  //     cellRow.appendChild(cell);
  //   }
  // });
}

function deleteAllRows() {
  var table = document.getElementById("cityTable");
  if (table && table.rows.length) {
    for (var i = table.rows.length - 1; i > 0; i--) {
      table.deleteRow(i);
    }
  }
}
