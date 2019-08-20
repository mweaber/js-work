//Arrays + Array Methods

const numbers = [12, 56, 43, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 85, 29, 11, 1);
const fruit = ['aaple', 'banana', 'orange', 'pear'];
const mixed = [12, 'hello', true, undefined, {a:1, b:2, c:3}, new Date()];

let val;

// Get array length
val = numbers.length
 
// Check if in array 
val = Array.isArray('56');

// Get single value
val = numbers[3];
val = numbers[0];

// Insert into something
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS

// Add onto end of array 
numbers.push(250);
 
// Add into the front
numbers.unshift(128);

// Take off from end
numbers.pop(); //Having nothing in parameter will remove last number

// Take off from front
numbers.shift();

// Splice out values
numbers.splice(1,1);
numbers.splice(1,3);

// Reverse Array
numbers.reverse();

// Concat Arrays
val = numbers.concat(numbers2);

// Sort
val = fruit.sort();
val = numbers.sort();

// Sort "compare"
val = numbers.sort(function(x, y){
    return x - y;
});

// Reverse Sort
val = numbers.sort(function(x, y){
    return y - x;
});

// Find 
function under50(num){
    return num < 50;
}

val = numbers.find(under50);


console(numbers);
console.log(val);