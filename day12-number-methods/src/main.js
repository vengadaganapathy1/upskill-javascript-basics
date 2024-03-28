/**
    number with decimals(float) and non decimals will be a number in JS
    8.8 and 9 both are numbers

    It is not needed to define type in JS. (loosely coupled)
    JS engine will convert into appropriate type
    ex var testVar = 5;
       var testArr = [14, 45];
       var testString = '5';

    + -> if used in string it will concat
    + -> if used for numbers it will add
    6 + 6 => 12
    '6' + '6' => '66'
    5 + 6 + '7' => '117'

    '6' + '6' => 66
    '6' * '6' => 36
    '6' / '6' => 1

    Floating point arithmetic is not always 100% accurate:
    let x = 0.2 + 0.1; will return 0.30000000000000004
    (0.2*10 + 0.1*10 ) / 10 => 0.3

    number will work well till 15 digits
    we need to use BigInt

    For other operators (/, *, % etc.), JS will convert string to Number, 
    before calculating
    '8' / '2' => 4
    '1000' / '1e2' => 10
    'e' will be allowed in number field
    '800' % '2' => 0

    NaN - Not a number
    Number('55') => 55
    Number('test') => NaN
    Number('8p') => NaN

    isNaN() - will return if the provided value is NaN or not
    typeof NaN => number

    Infinity 
    2/0 -> Infinity 
    typeof Infinity => number 

    Number as Object
    like String, Number is also a class with some methods
    new - will create an instance for class
    var no = new Number('456'); this will be an object with Number methods
    so no == 456 will gives true, but no === 456 will give false

    toString()? => converts no to string 67 to '67'
    
    below will be covered later
    base 64
    base 8

    toString()	Returns a number as a string
    toExponential()	Returns a number written in exponential notation
        converts no with expo value 950000000000000000000000000 => 9.5e+27
        toExponential(fractionDigits) => denotes no of digits after decimal place
        toExponential(6) => x.000000

    toFixed()	Returns a number written with a number of decimals
        toFixed() => will round the given no
        toFixed(2) => will add two digits after decimal => x.00
        toFixed(4) => will add two digits after decimal => x.0000
        toFixed(6) => will add two digits after decimal => x.000000
        (3.44).toFixed => 3
        (3.4567).toFixed(2) 3.46
        (3.4547).toFixed(2) 3.45
    toPrecision()	Returns a number written with a specified length
        will show the number of digits based on the value given for precision
        56.toPrecision(4) => 56.00
        5678.66toPrecision(8) => 5678.6600

    ValueOf()	Returns a number as a number from the number obj
        In JavaScript, a number can be a primitive value (typeof = number) or an object (typeof = object).
        The valueOf() method is used internally in JavaScript to convert Number objects to primitive values.

        (123).valueOf() //123

        console.log((new Number(756)) === 756); // false
        console.log((new Number(756)).valueOf() === 756); // true
    
    Number, parseFloat, parseInt are not number methods. They are global JavaScript methods.

    Number => 
        will convert string to number
        it will never takes char
        Number(12 6) => NaN
        Number(12AB) => NaN
        Number(12,6) => NaN
        Number(12.6) => 12.6
    parseInt => 
        will parses string and converts to integer(whole number)
        it will allow chars as well and returns first no - ex parseInt('12 years') => 12
        it should starts with no, if not it will return NaN
        ex parseInt('age is 12 years') => NaN
        it will never round off 10.75 will return 10
    parseFloat => will convert string to number
        will convert string to floating number
        float - decimal number
        it will allow chars as well - ex parseFloat('12.5 years') => 12.5
        it should starts with no, if not it will return NaN
        ex parseFloat('age is 12.5 years') => NaN
        it will never round off 10.75 will return 10.75

    Number methods cannot be used on Numbers
        ('12.5').parseFloat() is not allowed
        instead we should use Number.parseFloat('12.5') or parseFloat('12.5') as this is global method
    
    Number.isInteger() - Returns true if the value provided is a number
    Number.isSafeInteger() - 
        Integer => values from  (-2 ** 53) -1 from (2 ** 53) -1
        Safe integers are all integers from -(2 power 53 - 1) to +(2 power 53 - 1).
        This is safe: 9007199254740991. This is not safe: 9007199254740992.

 */

function onLoad() {
  var sum = 0.2 + 0.1;
  console.log(sum);
  console.log((0.2 * 10 + 0.1 * 10) / 10);

  var stringValue1 = "Test";
  var convertToNo1 = Number(stringValue1); // NaN

  var stringValue2 = "34";
  var convertToNo2 = Number(stringValue2); // 34
  console.log(`${isNaN(convertToNo1)} ${isNaN(convertToNo2)}`);

  console.log(typeof NaN);

  console.log(2 / 0); // Infinity

  var str1 = new String("test");
  var str2 = new String("test");
  console.log(str1, str2);

  var no1 = new Number("456"); // will be an object
  var no2 = new Number("456");
  var no3 = 456; // it is just value
  console.log(no1, no2, no3);

  console.log(no1 == no3); // true
  console.log(no1 === no3); // true

  var expoNumber = 5600000000000;
  console.log(expoNumber.toExponential()); // 5.6e+12

  var expoNumber = 0.00000056;
  console.log(expoNumber.toExponential()); // 5.6e-7

  var expoNumber = 9.8;
  console.log(expoNumber.toExponential(4)); // 9.8000e+0
  console.log(expoNumber.toExponential(10)); // 9.8000000000e+0

  console.log((2.33).toFixed()); // 2
  console.log((2.83).toFixed()); // 3
  console.log((12).toFixed(4)); // 12.0000
  console.log((2.33).toFixed(2)); // 2.33
  console.log((2.33).toFixed(4)); // 2.3300

  console.log((56).toPrecision(4)); // 56.00
  console.log((5678.66).toPrecision(8)); // 5678.6600

  console.log("--->" + (5678.66).toPrecision(2)); // 5.7e+3 // 5.7*1000 // 5700 /
  console.log("--->" + (563432423663478.66).toPrecision(10));
  // 56343242366
  // 5.634324237e+14
  // 563432423700000
  // 563432423663478

  var numberObj = new Number(756);
  console.log(numberObj);

  console.log(numberObj === 756); // false
  console.log(numberObj.valueOf() === 756); // true

  console.log(
    Number(true) + // 1
      "\n" +
      Number(false) + // 0
      "\n" +
      Number("10") + // 10
      "\n" +
      Number("  10") + // 10
      "\n" +
      Number("10  42") + // NaN
      "\n" +
      Number(" 10  ") + // 10
      "\n" +
      Number("10.33") + // 10.33
      "\n" +
      Number("10,33") + // NaN
      "\n" +
      Number("10 33") + // NaN
      "\n" +
      Number("John") + // NaN
      "\n" +
      Number("10.5 years") + // NaN
      "\n" +
      Number("years 10") // NaN
  );

  console.log(
    parseInt("10") + // 10
      "\n" +
      parseInt("10.33") + // 10
      "\n" +
      parseInt("10 6") + // 10
      "\n" +
      parseInt("10.5 years") + // 10
      "\n" +
      parseInt("years 10") // NaN
  );

  console.log(
    parseFloat("10") + // 10
      "\n" +
      parseFloat("10.33") + // 10.33
      "\n" +
      parseFloat("10 6") + // 10
      "\n" +
      parseFloat("10.5 years") + // 10.5
      "\n" +
      parseFloat("years 10") // NaN
  );

  console.log(Number.isInteger(456)); // true
  console.log(Number.isInteger("456")); // false
  console.log(Number.isSafeInteger(2 ** 53 - 1)); // true
  console.log(Number.isSafeInteger((2 ** 53 - 1) * -1)); // true
  console.log(Number.isSafeInteger(2 ** 53)); // false
  console.log(Number.isSafeInteger(2 ** 54)); // false
}
