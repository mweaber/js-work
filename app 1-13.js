// General Loops & Iterations
//Run until certain condition is met

// ---- For Loop -----

for(let i = 0; i <= 10; i++){   
    if (i === 2){
       console.log('2 is my favorite number');
       continue; 
    }

    if (i === 5){
        console.log('Loop Broken');
        break;
    }

    console.log('Number ' + i);  
}


// ---- While Loop ----

let i = 0;

while(i < 10){
    console.log('Number ' + i);
    i++;
}


// ---- Do While Loop ----

let i = 100;

do {
    console.log('Number ' + i);
    i ++
}

while(i < 10);

// ---- Loop over Arrays ----

const car = ['Ford', 'Chevy', 'Honda', 'Toyota']

for (let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

// ---- For Each Array Loop

cars.forEach(function(car, index, array){
    console.log(`${index} : ${car}`);
    console.log(array);
});

// ---- Map ----

const users = [
    {id: 1, name: 'Matt'},
    {id: 2, name: 'Becca'},
    {id: 3, name: 'John'},
    {id: 4, name: 'Scarlet'},
];

const ids = users.map(function(user){
    return user.id;
});

console.log(ids);

// ---- For In Loop ----

const user = {
    firstName: 'Matthew',
    lastName: 'Weaber',
    age: 29
};

for (let x in user){
    console.log(x); // Gives you the key from the object
    console.log(`${x} : ${user[x]}`);
}