alert('hello, world');

console.log(1);
console.log(2);

<!-- will run in order from log 1 to 2 -->

let age = 25;
let year = 2019;

// log thing to console
// console.log(age, year);

/* age = 30;
console.log(age);

const points = 100;
console.log(points); */

var score = 75;
console.log(score)

//strings
console.log('hello, world');

let email = 'mario@thenetninja.co.uk';
console.log(email);

// string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' lastName;
console.log(fullName);

//getting characters
console.log(fullName[2]);

//string lenght
console.log(fullName.lenght);

//string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@')

//common string methods

let email = 'mario@thenetninja.co.uk';

//let result = email.lastIndexOf('n');

//let result = email.slice(2,5);

//let result = email.substr(4,10);

let result = email.replace('n', 'w');

console.log(result);

let radius = 10;
const pi = 3.14;

//console.log(radius, pi);

//math operators +, -, *, /, **, %

//console.log(10 / 2);
//let result = radius % 3;
//let result = pi * radius**2

//order of operation - B I D M A S

//let result = 5 * (10-3)**2;

//console.log(result);

let likes = 10;

//likes = likes + 1;
//likes++;
//likes--;

//likes += 10;
//likes -= 5;
//likes *= 2;
//likes /= 2;

//console.log(likes);

// NaN - not a number

//console.log(5 / 'hello');
//console.log(5 * 'hello');

let result = 'the blog has' + likes + ' likes';
console.log(results);

//template strings
const title = 'Best reads of 2019'
const author = 'Mario';
const likes 30;

//concatenation way
//let result = 'The blog called' + title + 'by' + author + 'has' + likes + 'likes';
//console.log(result);

//template string way
let result = 'The blog called ${title} by ${author} has ${likes} likes';
console.log(result);

//creating html templates
let html = '

';
