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

    // Remove Task Event
    taskList.addEventListener('click', removeTask);

    // Clear all task
    clearBtn.addEventListener('click', clearTasks);

    // Filter Tasks
    filter.addEventListener('keyup', filterTasks);
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

// Remove Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        // console.log(e.target);
        if(confirm('Are you sure?')){
          e.target.parentElement.parentElement.remove();  
        }   
    }   
}

// Clear Tasks
function clearTasks(e) {
    // taskList.innerHTML = '';

    // Faster option
    // http://jsperf.com/innerhtml-vs-removechild
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase;
    document.querySelectorAll('.collection-items').forEach
    (function(task){
        const item = task.firstChild.textContent;
        if(item.toLocaleLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    });
}