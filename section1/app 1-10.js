// If Statements & Comparison Operators

// if(something){
//     do something
// } else {
//     do something else
// }

const id = '100'

// Equal to
// == means comparing the two things in ( )

// if(id == 100){
//     console.log('Correct')
// } else {
//     console.log('Incorrect')
// }

// Not equal to
// if(id != 101){
//     console.log('Correct')
// } else {
//     console.log('Incorrect')
// }

// Equal to value and type 
// === matches both value and type
// if(id === 100){
//     console.log('Correct')
// } else {
//     console.log('Incorrect')
// }

// NOT Equal to value and type 
// if(id !== 100){
//     console.log('Correct')
// } else {
//     console.log('Incorrect')
// }

// Test if undefined
// if(typeof id !== undefined){
//     console.log(`The ID is ${id}.`)
// } else {
//     console.log('No ID found.')
// }

// Testing Great or Less Than
// if (id >= 200) {
//     console.log('Correct');
// } else {
//     console.log('Incorrect');
// }

// If Else

const color = 'Green'

// if (color === 'Green'){
//     console.log('Color is Green');
// } else if (color === 'Blue'){
//     console.log('Color is Blue');
// } else {
//     console.log('Color is not found');
// }

// Logical Operators
const name = 'Matt';
const age = 29;

// And && 
if(age > 0 && age < 12){
    console.log(`${name}, is a child`);
} else if ( age >= 13 && age <= 19) {
    console.log(`${name}, is a teenager`);
} else {
    console.log(`${name}. is an adult`);
}

// Or ||
if (age < 16 || age > 65){
    console.log(`${name}, cannot run in race`);
} else {
    console.log(`${name}, is registered for the race`);
}

// Ternary Operator
console.log(id === 100 ? 'Correct': 'Incorrect'); // Much easier// Need to LEARN

// Without Braces

if(id === 100)
    console.log('Yes');
else 
    console.log('No');