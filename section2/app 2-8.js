// ---- Mouse Events

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click 
// clearBtn.addEventListener('click', runEvent);
// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);
// Mouse-down
// clearBtn.addEventListener('mousedown', runEvent);
// Mouse-up
// clearBtn.addEventListener('mouseup', runEvent);
// Mouse-enter
// card.addEventListener('mouseenter', runEvent);
// Mouse-leave
// card.addEventListener('mouseleave', runEvent);
// Mouse-over
// card.addEventListener('mouseover', runEvent);
// Mouse-out
// card.addEventListener('mouseout', runEvent);
// Mouse-Move
card.addEventListener('mousemove', runEvent);


// Event Handler 
function runEvent(e) {
    e.preventDefault;
    console.log(`Event Type: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} & MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
