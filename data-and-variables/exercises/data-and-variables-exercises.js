// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

let nameOfSpaceShuttle = "Determination";
let shuttleSpeed = 17500;
let distanceToMars = 225000000;
let distanceToMoon =384400;
const milesPerKilomoter = 0.621; 
let milesToMars = distanceToMars * milesPerKilomoter;
let hoursToMars = milesToMars / shuttleSpeed;
let daysToMars = hoursToMars / 24;
let milesToMoon = milesToMars * shuttleSpeed;
let daysToMoon = milesToMoon / 24;


console.log(2 ** 8)
console.log(1 + 5 % 3)
console.log(milesToMars, hoursToMars, daysToMars)
console.log(typeof nameOfSpaceShuttle);
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof distanceToMoon);
console.log(typeof milesPerKilomoter);
console.log(`${nameOfSpaceShuttle} will take ${daysToMars} days to reach Mars.`);
console.log(`${nameOfSpaceShuttle} will take ${daysToMoon} days to reach the Moon.`);
