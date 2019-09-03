// Traversing The DOM

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get Child Nodes
val = list.childNodes;
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType; // Will return #value. See table below.

// Reference to nodeTypes:
    // 1 - Element
    // 2 - Attribute (deprecated)
    // 3 - Text Node
    // 8 - Comment
    // 9 - Document Itself
    // 10 - Doctype


// Get Children Element Nodes
val = list.children; // Returns an HTML collection
val = list.children[0];
val = list.children[1];

list.children[1].textContent = 'Hello';

// Getting Children of Children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

// Getting First Child
val = list.firstChild;
val = list.firstElementChild; // Useful to skip getting #text nodes

// Getting Last Child
val = list.lastChild;
val = list.lastElementChild; // Same as above

// Count Child Elements
val = list.childElementCount; 


// Get Parent Node
val = listItem.parentNode;
val = listItem.parentElement;

val = listItem.parentElement.parentElement;

// Get Next Siblings 
val = listItem.nextSibling; // Returns textnode
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get Prev Siblings 
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);