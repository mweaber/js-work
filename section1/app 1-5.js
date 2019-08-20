// Strings and Concatination
// Comment out what is not needed to test. 

const firstName = "Matthew";
const lastName = "Weaber";
const age = 23;
const str = "Hello My name is Matt"
let val;

val = firstName + lastName;

// Concatination
val = firstName + " " + lastName;

// Appending
val = "Rebecca ";
val += "Olson";

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait'; //Could use " " also.

// Length
val = firstName.length;

//Concat
val = firstName.concat(' ', lastName); //Concatting without having to type it

// Change Case
val = firstName.toUpperCase();
val = lastName.toLocaleLowerCase(); 

val = firstName[0]; //Get's index of the string. 

// indexOf()
val = firstName.indexOf('l'); // -1 means no character found
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('2');
// Get last character
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(0, -3); //Starts at the end of string

// split()
val = str.split(' ');

// replace()
val = str.replace('Matt', 'Becca');

// includes()
val = str.includes('Hello');



console.log(val);