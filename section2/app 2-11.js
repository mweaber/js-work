// ---- Local & Session Storage

// Set local storage item
localStorage.setItem('name', 'Matthew');
localStorage.setItem('age', '30');

// Set session storage
sessionStorage.setItem('name', 'Becca'); // Clears on browser closure. 

// Remove local storage item
// localStorage.removeItem('name'); // Only need key on removal

// Get item from local storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);

// Clearing all storage
// localStorage.clear();


// Example of adding event listener to form, saving values to local storage. Set up if/else to check if values in local storage and parsing those values. Pushing new values into the array and alerting on save. Then console logging values by parsing data.

// Sets listener to form for submit.
document.querySelector('form').addEventListener('submit', function(e){
    //Prevents page from refreshing
    e.preventDefault();

    // Defines tasks to the value of form input
    const task = document.getElementById('task').value;

    // Initialize variable
    let tasks;

    // Sets conditional for if localstorage has values in it already.
    // If tasks is empty set tasks variable to empty array.
    if(localStorage.getItem('tasks') === null) {
        tasks = []
    // Else if not empty parse values of the items in localstorage
    // Have to use JSON.parse.
    }else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // Pushes new tasks into tasks variable array
    tasks.push(task);

    // Stringify item 
    localStorage.setItem('tasks', JSON.stringify(tasks));

    alert('Task saved');
});

// Parsing items from local storage
const tasks = JSON.parse(localStorage.getItem('tasks'));

// Sets foreach loop to console log.
tasks.forEach(function(task){
    console.log(task);
})