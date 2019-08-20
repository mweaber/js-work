//Template Literals

const name = 'Matthew';
const age = 29;
const job = 'Web Developer';
const city = 'Davenport';
let html;
 
function hello(){
    return 'Hello';
}
//Without template strings (es5)

html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

//With template strings (es6)
html = 
    `<ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>City: ${city}</li>
        <li>Job: ${job}</li>
        <li>${2 +2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>`;
