

const makeLine=(size)=>{
let line = "";
for (let i = 0; i < size; i++){
    line += "#"
 
}
return line
}
// console.log(makeLine(10))

const makeRectangle=(width, height)=>{
let rect = "";
for (let i = 0; i < height+1; i++){
    rect += makeLine(width) + "\n";
   
}
// console.log(rect)
  return rect
}

console.log(makeRectangle(8,4));

const makeSquare=(width, height)=>{
    let square = ""
    for (let i = 0; i < height; i++){
        // makeLine(width)
        square += makeLine(width) + "\n"
        // if (width === height){
        //     square += makeLine(width+1) + "\n"
        //  }else {
        //      console.log("width and height must be equal values ")
        //  }
       
         
    }
    // console.log(square)
    return square
}
console.log(makeSquare(8,4))

const makeDownStairs=(height)=>{
let steps = '';
for (let i = 0; i < height; i++){
    console.log(makeLine(i))
    steps += makeLine(i)
}

}
console.log(makeDownStairs(7))