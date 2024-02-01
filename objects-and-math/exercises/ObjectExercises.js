const randomIndex=()=>{
   return Math.round(Math.random() * 10)
 }
 const move=()=>{
   return Math.floor(Math.random() * 11)
 }
const crewFitness=(arr)=>{
   let raceResults = [];
   for (i = 0; i < arr.length; i++){
      let steps = 0;
      let turns = 0
      while (steps < 20){
         steps += arr[i].move;
         turns++
      }
    raceResults.push({
      name: arr[i].name,
      turns: turns
     });
     }
    for (i = 0; i < raceResults.length; i++) {
      console.log(`${raceResults[i].name} tool ${raceResults[i].turns} turns to take 20 steps. `)
    }
    return raceResults
 
}
 const crewReport=(arr)=>{
   // console.log(arr)
for (i = 0; i < arr.length; i++){
//   console.log(arr[i].astronautId) 
  console.log(` ${arr[i].name} is a ${arr[i].species}. They are ${arr[i].age} years old and ${arr[i].mass} kilograms. Their ID is ${arr[i].astronautId} `)
}
 };

let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautId: randomIndex(),
   move: move()
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautId: randomIndex(),
   move: move()
};

let dog ={
   name: "Leroy",
   mass: 14,
   age: 6,
   species: "Dog",
   astronautId: randomIndex(),
   move: move()

};

let waterBear ={
   name: "Almina",
   mass: 0.00000001,
   age: 1,
   species: "Tartigrade",
   astronautId: randomIndex(),
   move: move()

};
let chimpTwo ={
   name: "Brad",
   mass: 11,
   age: 6,
   species: "Beagle",
   astronautId: randomIndex(),
   move: move()

};
let crew = [superChimpOne, chimpTwo, salamander, dog, waterBear];
console.log(crewReport(crew));
console.log(crewFitness(crew));



// After you have created the other arrect literals, add the astronautID property to each one.

// Create an array to hold the animal arrects.

// Print out the relevant information about each animal.

// Start an animal race!