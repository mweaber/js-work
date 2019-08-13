// Numbers & Math Object
// Comment out what is not needed to test. 
const num1 = 100;
const num2 = 50;

let val;

// Simple Math w/Numbers
val = num1 + num2; //Addition
val = num1 - num2; //Subtraction
val = num1 * num2; //Multiplication
val = num1 / num2; //Division
val = num1 % num2; //Modulus (Remainder)

// Math Object
val = Math.PI;
val = Math.round(2.8); // Returns 3
val = Math.ceil(2.4); // Highest whole number
val = Math.floor(2.4); // Lowest whole number 
val = Math.sqrt(64); //Square Root
val = Math.abs(-3); // Absolute
val = Math.pow(8, 2); //Power 64
val = Math.min(2, 33, 45, 21, 55, 64, 4); // Smallest number. Also takes -() numbers
val = Math.max(5, 33, 22, 88, 78, 53, 965); // Largest number in set. 
val = Math.random(); //Random number
val = Math.floor(Math.random() * 20 + 1); //Random number between 1-20;
//Math.floor rounds down a random number * 20 is the largest number possible and the + 1 is needed to include it in the random number possibility.

console.log(val);