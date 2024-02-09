// launchcode.test.js code:
const {launchcode,findKeyInObject, updateObjectKey, removeKeyValue} = require('../index.js');

describe("Testing launchcode", function(){
test("shows that launchcode is a object", ()=>{
  expect(typeof launchcode).toBe("object")
});
test("returns a spefic key in the Launchcode object",()=>{
  let value = findKeyInObject(launchcode, "executiveDirector")
  expect(value).toBe("Jeff")
});
test("updates executive directors name",()=>{
  const updatedLaunchCode = updateObjectKey(launchcode, "executiveDirector", "Dan Orlovsky")
  expect(updatedLaunchCode.executiveDirector).toBe("Dan Orlovsky")
});
test("removes a key value and returns undefined for that key",()=>{
  const removedValue = removeKeyValue(launchcode, "organization")
      expect(removedValue["organization"]).toBeUndefined()
    });
   // Write your unit tests here!
  
  
});