/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */




/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 





/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

  // exercise 1
let total = 0
  for (let i = 0; i < 20; i++){
    if (i % 2 !== 0){
      console.log(i)
    }
    total += 1
    // console.log(`${total}`)
  }


  for(let i = 12; i >= -14; i--){
   if (i % 2 == 0){
    console.log(i)
   }

  }


  for (i = 50; i > 20; i--){
    if (i % 3 === 0 ){
      console.log(i)
    }
  }


  // exercise 2

  let str = "LaunchCode";
  let arr = [1, 5, `LC101`, `blue`, 42]
  
  let newStr = [];
  const reversedString=()=>{
    for (i = 0; i < str.length; i++){
   
      newStr.push(str[i])
   
    }
    console.log(newStr.reverse().join(""))
  }

reversedString();

  for (i = 0; i < arr.length; i++){
    
    console.log(arr[i])
  }


  // exercise 3

  let arr2 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104]

  let odd = [];
  let even = [];

  const seperator=()=>{
    for (i = 0; i < arr2.length; i++){
      if (i % 2 === 0){
        even.push(arr2[i])
      }
      else odd.push(arr2[i])
    }
console.log(even)
console.log(odd)
  }

  seperator()