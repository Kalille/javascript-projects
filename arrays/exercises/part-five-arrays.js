let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
let splitSentence = str.split(' ')
console.log(splitSentence)
//2) Use the join method on the array to identify the purpose of the parameter inside the ().
let joined = splitSentence.join(' ')
console.log(joined)
//3) Do split or join change the original string/array?
let reversed = str.split(' ').reverse().join(' ')
console.log(reversed)
//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
let revamped = cargoHold.split(",").sort().join(" ")
console.log(revamped)
