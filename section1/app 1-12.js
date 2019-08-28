// Functions and Expressions

// Function Declarations

function greet(firstName = 'Steve', lastName = 'Smith') {
    // if (typeof firstName === 'undefined'){firstName = 'John'}
    // if (typeof lastName === 'undefined'){lastName = 'Doe'}
    // console.log('Hello');
    return 'Hello ' + firstName + lastName;
}

// console.log(greet('Matthew', 'Weaber'));

// Function Expressions

const square = function(x){
    return x * x
};

// console.log(square(8));

// Immediately Invokable Function Expressions - IIFEs

// (function() {
//     console.log('IIFE Ran..');
// })();

// (function(name) {
//     console.log(`Hello, ${name}`);
// })('Matthew');

// Property Methods

const todo = {
    add: function(){
        console.log('Add todo');
    },
    edit: function(id){
        console.log(`Edit todo with ${id}`);
    }
}

todo.delete = function(){
    console.log('Delete todo');
}

todo.add();
todo.edit(22);
todo.delete();