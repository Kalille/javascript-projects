// Initialize Variables below

let date = "Monday 2019-03-18";
let time = "10:05:34";
let astronautCount = 7;
let astronautStatus = "ready"
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
const maximumMassLimit = 850000;
let fuelTempCelcius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 100;
let weatherStatus = "clear";
let preparedForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7 && astronautStatus === "ready" && totalMassKg < maximumMassLimit && fuelTempCelcius > -300 || fuelTempCelcius < -150 && fuelLevel == 100 && weatherStatus === "clear"){
    console.log(" All systems are a go! Initiating space shuttle launch sequence\n" + 
    "----------------------------------------------------------------\n" +
    `Date: ${date}\n`+
    `Time: ${time}` +
    `Astronaut Count: ${astronautCount}\n` +
    `Crew Mass: ${crewMassKg}\n`+
    `Fuel Mass: ${fuelMassKg}\n`+
    `Shuttle Mass: ${shuttleMassKg}\n`+
    `Total Mass: ${totalMassKg}\n` +
    `Fuel Temperature: ${fuelTempCelcius}\n` +
    `Weather Status: ${weatherStatus}\n` +
    "----------------------------------------------------------------\n" +
    "Have a safe trip astronauts!"
    )
   

}else{
    console.log("not ready for take off")
}
// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions
