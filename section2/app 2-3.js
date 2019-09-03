// DOM Selector For Multiple Elements

//document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// // Gets all classes with that name. Works on the global scale

// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// Can use something like querySelector to narrow down scope to certain elements
// which can help with DOM manip.

// console.log(listItems);

// //document.getElementsByTagName

// let lis = document.getElementsByTagName('li');

// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// Convert HTML Collection into array

// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index}: Whatcha!`
// });

// console.log(lis)

// document.querySelectorAll

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index){
    item.textContent = `${index}: Whatcha!`
});
// Does not need to be made into Array as it is by default a nodelist

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index){
    li.style.background ='#ccc';
});

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = '#f4f4f4'
}

// console.log(items);



