// Type Conversion and Coercion
// Comment out what is not needed to test. 
// ----------------------------------------------
// Number to String
let val;
val = String(5);
val = String(4+4);
// Boolean to String
val = String(true);
// Date to String
val = String(new Date());
// Array to String
val = String([1,2,3]);

// toString
val = (5).toString();
val = (true).toString();

// ------------------------------------------------
// String to Number
val = Number('5');
val = Number(true); // True = 1 False/null = 0
val = Number('Hello'); // Return NaN
val = Number([1,2,3]); // Return NaN 

val = parseInt('100'); // Returns whole number
val = parseFloat('100.30'); // Returns decimal
// parseFloat returns 1 decimal place if 0 but toFixed() will show the decimals based on what you enter in the method.

//  Output
console.log(val);
console.log(typeof val);
console.log(val.length); // Works on strings
console.log(val.toFixed()); // Works on numbers, specifies decimals per inside ()

// ------------------------------------------------
// Type Coersion
const val1 = String(5); 
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);