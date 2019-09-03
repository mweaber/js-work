// ---- Creating Elements ----  

// Create Element
const li = document.createElement('li');

//Adding Class
li.className = 'collection-item';

// Adding ID 
li.id = 'new-item';

// Adding Attributes
li.setAttribute('title', 'New Item');

// Adding Text Node and Append
li.appendChild(document.createTextNode('Hello Chumps'));

// Create New Link Element
const link = document.createElement('a');

// Adding classes to new link
link.classList = 'delete-item secondary-content';

// Add InnerHtml
link.innerHTML = '<i class="fa fa-remove"></i>'

// Append Link to Li
li.appendChild(link);

// Append li As Child to ul
document.querySelector('ul.collection').append(li);



console.log(li);