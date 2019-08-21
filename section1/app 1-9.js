// Date and Times

let val;

const today = new Date();
let birthday = new Date('12-19-1989 11:54:00');
birthday = new Date('December 19 1989');
birthday = new Date('12/19/1989');


val = today.getMonth(); //Months are zero based
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1989);
birthday.setHours(3);
birthday.setMinutes(33);
birthday.setSeconds(41);

console.log(birthday);