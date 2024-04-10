/*
String
    - ''
    - ""
    - ' inside '' and " inside "" is not possible
    - To resolve we need to use ' inside "" and " inside ''
    - var input = 'ABCDEFGH';
    - input.length -> Will give length
    - input[0] will give first value and
    - input[input.length - 1] will give last value in the string
    - Palindrome ?
    - Escape characters - \' , \", \\. Either of below lines will work
    - 'We are not in "Tamil Nadu"' or
    - "We are not in \"Tamil Nadu\""
    - 'We are not in \'Tamil Nadu\''
    - "This is \ character" => will print "This is character"
    - Tp resolve => "This is \\ character" => will print "This is \ character"
    - let name = 'Upskill';
    - let name1 = new String('Upskill'); name1 => String {'Upskill'}
    - name == name1 => true
    - name === name1 => false
    - Comparing two JavaScript objects always returns false even if all key value matches.
    - {name: '123'} == {name: '123'} // false
    - new String('123') == new String('123') will return false
    - new String('123') === new String('123') will return false
    - return and break in loops. return will come out from whole function, break will exit from its current loop

 */
function isPalindrome() {
  const enteredInput = document.getElementById("input1").value;
  let reversedInput = [];
  for (let count = enteredInput.length - 1; count >= 0; count--) {
    reversedInput.push(enteredInput[count]);
  }
  reversedInput = reversedInput.join("");
  if (enteredInput.toUpperCase() === reversedInput.toUpperCase()) {
    alert("Entered string is Palindrome");
  } else {
    alert("Entered string is not a Palindrome");
  }
}

function isPalindromeRefactored1() {
  const enteredInput = document.getElementById("input1").value;
  for (let count = 0; count < enteredInput.length / 2; count++) {
    if (
      enteredInput[count].toUpperCase() !==
      enteredInput[enteredInput.length - 1 - count].toUpperCase()
    ) {
      alert("Entered string is not a Palindrome");
      return;
    }
  }
  alert("Entered string is Palindrome");
  return;
}

function isPalindromeRefactored2() {
  const enteredInput = document.getElementById("input1").value;
  let reversedInput = enteredInput.split("").reverse().join("");
  if (enteredInput.toUpperCase() === reversedInput.toUpperCase()) {
    alert("Entered string is Palindrome");
  } else {
    alert("Entered string is not a Palindrome");
  }
}

function usingStringAsObject() {
  let name = "Upskill";
  let name1 = new String("Upskill");

  console.log(name, name1); // 'Upskill', String{'Upskill'}
  console.log(name == name1); // true
  console.log(name === name1); // false

  let student1 = new String("John");
  let student2 = new String("John");
  console.log(student1 == student2); // false
  console.log(student1 === student2); // false
  // Comparing two JavaScript objects always returns false.
  const obj1 = { name: "Upskill", location: "Chennai" };
  const obj2 = { name: "Upskill", location: "Chennai1" };
  console.log(obj1 === obj2);

  let text = "I love cats. Cats are very easy to love. Cats are very popular.";
  const iterator = text.matchAll(/cats/gi);

  //document.getElementById("demo").innerHTML = iterator;
  iterator.forEach((val) => {
    console.log(val);
  });

  for (x in obj1) {
    if (obj1[x] !== obj2[x]) {
      alert("Objects are not same");
      return;
    }
  }
  alert("Objects are same");
  return;
}

function compareObjects() {
  const obj1 = { name: "XYZ", class: 5, school: "SVM" };
  const obj2 = { name: "XYZ", class: 5, school: "SVM" };

  console.log(obj1 === obj2); // false
  console.log(obj1.name === obj2.name && obj1.class === obj2.class); // true
  console.log("For in ");
  for (key in obj2) {
    console.log(key);
    if (obj1[key] !== obj2[key]) {
      alert("Not matched");
      return;
    }
  }
  alert("Match");
}

function compareInnerObjects() {
  var obj1 = { name: "ABC", class: 5, marks: [{ tamil: 100, english: 45 }] };
  var obj2 = { name: "ABC", class: 5, marks: [{ tamil: 99, english: 45 }] };
  let isMatch = true;
  for (key in obj2) {
    console.log(key);
    if (typeof obj2[key] === "object") {
      for (innerKey in obj2[key][0]) {
        console.log(innerKey);
        if (obj1[key][0][innerKey] !== obj2[key][0][innerKey]) {
          alert("Not matched");
          isMatch = false;
          return;
        }
      }
    } else {
      if (obj1[key] !== obj2[key]) {
        alert("Not matched");
        return;
      }
    }
  }
  alert("Match");
}

function usingReturn() {
  let counter = 0;
  for (let count = 0; count < 15; count++) {
    for (let innerCount = 0; innerCount < 15; innerCount++) {
      console.log("counter", counter);
      counter = counter + 1;
      if (innerCount >= 1) {
        break;
      }
    }
  }
}
