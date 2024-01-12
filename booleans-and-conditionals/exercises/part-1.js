// Declare and initialize the variables for exercise 1 here:

// BEFORE running the code, predict what will be printed to the console by the following statements:
let engineIndicatorLight = "green";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
let engineTemperature = 2501;
let fuelLevel = 2001;
let commandOverRide = true;

if (fuelLevel >= 2000 && engineTemperature >= 2500){
   commandOverRide = false
}else if (commandOverRide === true){
   console.log("Prepare for take off!")
};

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
};


if (crewStatus === true){
   console.log("Crew Ready")
} else {
   console.log("Crew Not Ready")
};


if (computerStatusCode === 200){
   console.log("Please Standy by. Computer is rebooting")
} else if (computerStatusCode === 400){
   console.log("Success Computer online")
}else {
   console.log("AlERT")
}


if (shuttleSpeed > 175000){
   console.log("Alert: Escape vellocity reached!")
}else if (shuttleSpeed < 8000){
   console.log("ALERT: Cannot maintain orbit!")
}else {
   console.log("Stable Speed")
};


if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking"){
   console.log("ENGINE FAILURE IMMINENT!")
}else if ( fuelLevel <= 5000 || engineTemperature > 2500){
   console.log("Check fuel level. Engines running hot.")
}else if (fuelLevel > 2000 && engineTemperature <= 2500){
   console.log("Fuel tank is good")
} else if (fuelLevel > 10000 && engineTemperature <= 25000){
   console.log("Fuel level above 50\%. Engines good")
}else if (fuelLevel > 5000 && engineTemperature <= 25000){
   console.log(" Fuel level above 25\&. Engines good.")
}else {
   console.log("Fuel and engine status pending...")
}