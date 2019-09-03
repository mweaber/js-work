// Event Listeners & Event Objects

// document.querySelector('.clear-tasks').addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('Hello Click!');
// });

// Event Listener takes in two things 
// 1 - The actual event we want to listen for (click)
// 2 - aynonymous function (what is going to happen)

// In href a # will stop browser from reloading page/ or do preventDefault();


document.querySelector('.clear-tasks').addEventListener('click', onclick);

function onclick(e){
    //console.log('Clicked');

    let val;
    val = e;
 
    // Event target element
    val = e.target
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    e.target.innerText = 'Hello'

    // Event Type
    val = e.type;

    // Timestamp
    val = e.timeStamp;

    // Coordinates event rel to window
    val = e.clientY
    val = e.clientX

    // Coordinates event rel to element
    val = e.offsetY
    val = e.offsetX

    console.log(val);
}

