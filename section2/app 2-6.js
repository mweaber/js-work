// Remove and Replace Elements


// Create Element 
const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';

// Add new textnode
newHeading.appendChild(document.createTextNode('Task List'));

// Get heading to be replaced
const oldHeading = document.getElementById('task-title');

// Parent 
const cardAction = document.querySelector('.card-action');

// Replace 
cardAction.replaceChild(newHeading, oldHeading);

// ---- Remove Elemet ----

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove Specific List Item
// lis[0].remove();

// Remove By Child
list.removeChild(lis[2]);

// Classes & Attr

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val; 

// Classes & Class List
val = link.className;
val = link.classList;
val = link.classList[0];

link.classList.add('test');
val = link.classList;

link.classList.remove('test');
val = link.classList;

// Attr
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
val = link;
link.removeAttribute('title');


console.log(val);

 