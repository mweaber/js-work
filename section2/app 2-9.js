// ---- Keyboard & Input Events

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = '';


form.addEventListener('submit', runEvent);

// Keydown Event
// taskInput.addEventListener('keydown', runEvent);

// Keyup Event
// taskInput.addEventListener('keyup', runEvent);

//Keypress
// taskInput.addEventListener('keypress', runEvent);

// Focus 
// taskInput.addEventListener('focus', runEvent);

// Blur
// taskInput.addEventListener('blur', runEvent);

// Cut 
// taskInput.addEventListener('cut', runEvent);

// Paste
// taskInput.addEventListener('paste', runEvent);

// Paste
// taskInput.addEventListener('paste', runEvent);

// Input 
// taskInput.addEventListener('input', runEvent); // Fires for any input.

// Change
// select.addEventListener('change', runEvent); // Need to disable Materialize. 



function runEvent(e){
    
    console.log(`Event Type: ${e.type}`);

    // console.log(e.target.value);

    // heading.innerText = e.target.value;

    // //Get input value
    // console.log(taskInput.value);
    
    // // Prevent submit
    e.preventDefault();

    
    
}