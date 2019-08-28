// ---- Looking at the Window ----
// Document Object Model

// Window Methods / Objects / Props

// console.log(123);

// ---- Alerts ----
// window.alert('Hello World');

// ---- Propmt ----
// const input = prompt();
// console.log(input);

// ---- Confirm ---- 
// if(confirm('Are you sure?')){
//     console.log('Yes')
// } else {
//     console.log('No');
// }

let val; 

// ---- Outer & Inner height and width ----
// val = window.outerHeight;
// val = window.outerWidth;
// val = window.innerHeight;
// val = window.innerWidth;

// ---- Scroll Points ----

// val = window.scrollY;
// val = window.scrollX;

// ---- Location Object ----
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;

// ---- Redirect/ Reload ----
// val = window.location.href = 'http://google.com';
// val = window.location.reload();

// ---- History ----

// window.history.go(); // -x: replace x with # and will go back that number in history
// val = window.history.length;

// ---- Navigator Object ----
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);