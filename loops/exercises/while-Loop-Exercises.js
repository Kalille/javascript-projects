//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');
let fuelLevel = 5001;
let numberOfAstronauts = 0;
let altitude = 0;



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

// while(fuelLevel > 3000 || fuelLevel < 5000 || isNaN(fuelLevel)){
// fuelLevel = Number(input.question("What is your fuel level? "))
//  fuelLevel++
// }



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
  while (!numberOfAstronauts){
    numberOfAstronauts = input.question("How many astronauts available? (NOTE MAX CAPACITY IS 7) ");
    if (numberOfAstronauts > 7){
      let numberOfAstronauts = input.question("MAX CAPACITY has been met, Try Again\n How many astronauts are available? ")
     
      console.log(numberOfAstronauts)
    }
    
  }
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (fuelLevel > 0 && numberOfAstronauts){
  fuelLevel -= 100 * numberOfAstronauts;
  altitude += 50 
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log(`The Shuttle gained an altitude of ${altitude}`)
if (altitude > 2000){
  console.log("Orbit acheived")
}else{
  console.log("Failed to reach orbit")
}