// Define UI Variables 

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load All Event Listeners
loadEventListeners();

// Creating Function
function loadEventListeners(){
    // Add Task Event
    form.addEventListener('submit', addTask);
}

// Add Task 
function addTask(e){
    e.preventDefault();
    if (taskInput.value === '') {
        alert('Please Add A Task');
    }

    // Create <li> 
    const li = document.createElement('li');
    // Add Class
    li.className = 'collection-item';
    // Create Textnode & append to <li>
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new <a> 
    const link = document.createElement('a');
    // Add Class
    link.className = 'delete-item secondary-content';
    // Add Icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append <link> to <li>
    li.appendChild(link);


    //Append <li> to the <ul>
    console.log(li);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';

}