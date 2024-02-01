//Create an anonymous function and set it equal to a variable.
let jumping = function(num){
    if (typeof num === "number"){
        return num * 3
    }else if(typeof num === "string"){
        return "arrrggghhh"
    }else {
        return num
    }
 
      
    
   
}
// console.log(jumping("help"))
/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

let newFunction = function(arr){
    let newArray = []
  arr.map(data=>{
//    console.log(jumping(data))
   newArray.push(jumping(data))
  
  })
  return newArray
}


console.log(newFunction(arr))
