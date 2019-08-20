// Object Literals

const person = { 
    firstName: 'Matthew',
    lastName: 'Weaber',
    age: 29,
    email: 'matthew.weaber@gmail.com',
    hobbies: ['music', 'hockey', 'coding'],
    address: {
        city: 'Davenport',
        state: 'FL'
    },
    getBirthYear: function(){
        return 2019 - this.age;
    }
}

let val;
val = person;

// Specific Value
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.address;
val = person.address.state;
val = person['city'];
val = person.getBirthYear();

console.log(val);

const people = [
    {name: 'Matt', age: 29},
    {name: 'Becca', age: 23},
    {name: 'Mike', age: 29}
];

for (let i = 0; i < people.length; i ++){
    console.log(people[i].name);
}