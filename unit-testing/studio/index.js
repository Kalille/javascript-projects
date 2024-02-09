
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  prgramsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: ()=>{ return " "}
}

const findKeyInObject=(obj, userInput)=>{
for (let key in obj){
  if(key === userInput){
        return obj[key]
    }
}
}
// console.log(findKeyInObject(launchcode, "executiveDirector"))
const updateObjectKey=(obj, objKey,objectKeyValue)=>{
    for (let key in obj){
        // console.log(obj.executiveDirector = "Dan")
        if (key === objKey){
             console.log(obj.key)
            obj[key] = objectKeyValue
        }
        // console.log(obj)
  
    }
    return obj
}

const removeKeyValue=(obj, userInput)=>{
    // console.log(obj)
    for (let key in obj){
        if (key === userInput){
             obj[key] = undefined
        }
    }
    console.log(obj["organization"])
    return obj
}
// console.log(updateObjectKey(launchcode, "executiveDirector", "Dan Orlovsky"))
console.log(removeKeyValue(launchcode, "organization"))


module.exports = {
    launchcode,
    updateObjectKey,
    findKeyInObject,
    removeKeyValue
};

