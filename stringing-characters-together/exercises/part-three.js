//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
let firstLetter = language.slice(0,1);
let secondLetter = language.slice(4,5)
console.log(firstLetter + secondLetter)
//2. Without using slice(), use method chaining to accomplish the same thing.

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
let j = language[0];
let s = language[4]
console.log(`The abbreviation for JavaScript is ${j}${s}`)
//4. Just for fun, try chaining 3 or more methods together, and then print the result.

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let array = notTitleCase.split("")
array[0] = array[0].toUpperCase()
let titleCase =array.join('')
// let titleCase = notTitleCase[0].toUpperCase()
console.log(titleCase)
