// Constructors and 'this' Keyword

// Person Constructor
function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    // Example to get age from birthday.
    this.calculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    // console.log(this);
}

// console.log(this); // 'this' in the global scope refers to the window object
// const matt = new Person('Matt', 30);
// const becca = new Person('Becca', 24);

const matt = new Person('Matt', '12-19-1989');
console.log(matt.calculateAge());
