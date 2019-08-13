// Primitive Data Types:
// Stored directly in the location the variable accesses. Stored on the stack.

// Reference Data Type:
// Accessed by reference. Objects that are stored on the heap. A pointer to a location memory.



// Primitive

// String
const name = 'Matt';
console.log(typeof name);

// Number
const age = 30;
console.log(typeof age);

// Boolean 
const hasKids = false;
console.log(typeof hasKids);

// Null
const car = null;
console.log(typeof car);

// Undefined
let test; 
console.log(typeof test);

// Symbol (ES6)
const sym = Symbol();
console.log(typeof sym);


// Reference

// Array 
const hobbies = [
    'hockey',
    'coding'
];
console.log(typeof hobbies);

// Object Literal 
const address = {
    city:'Davenport',
    state:'Florida'
}
console.log(typeof address);

// Date 
const today =  new Date();
console.log(today);
console.log(typeof today);

