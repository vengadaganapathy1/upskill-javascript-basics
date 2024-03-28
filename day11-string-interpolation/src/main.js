/*
String templates
    String interpolations - used to merge strings
    dynamic characters can be inserted using ${}
    `This is ${dynamicValue} string`

    document.createElement
    appendChild
    
 */

function showGreetings() {
  var nameInputValue = document.getElementById("inputName").value;
  var cityInputValue = document.getElementById("inputCity").value;
  document.getElementById(
    "content"
  ).innerHTML = `Welcome ${nameInputValue} from ${cityInputValue}`;
}

var menuList = ["Home", "Contact Us", "Team", "Location"];
function showDynamicList() {
  var placeHolder = document.getElementById("dynamicList");
  var ul = document.createElement("ul");
  placeHolder.appendChild(ul);
  // Option 1

  //   var li = document.createElement("li");
  //   li.innerHTML = "Menu 1";
  //   ul.appendChild(li);

  //   var li = document.createElement("li");
  //   li.innerHTML = "Menu 2";
  //   ul.appendChild(li);

  //   var li = document.createElement("li");
  //   li.innerHTML = "Menu 3";
  //   ul.appendChild(li);

  //   var li = document.createElement("li");
  //   li.innerHTML = "Menu 4";
  //   ul.appendChild(li);

  // Option 2
  //   menuList.forEach((menu) => {
  //     var li = document.createElement("li");
  //     li.innerHTML = menu;
  //     ul.appendChild(li);
  //   });

  // Option 3 using string interpolation
  menuList.forEach((menu, index) => {
    var li = document.createElement("li");
    // li.innerHTML = index + 1 + " " + menu;
    li.innerHTML = `${index + 1} ${menu}`;
    ul.appendChild(li);
  });
}
