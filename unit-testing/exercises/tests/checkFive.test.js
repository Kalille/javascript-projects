let checkFive = require('../checkFive');


describe("check five", function(){
    test("check if input is less than 5 number", ()=>{
        expect(checkFive(4)).toBe("4 is less than 5.")
    });
    test("check if input is more than 5 number", ()=>{
        expect(checkFive(6)).toBe("6 is greater than 5.")
    });
    test("check if input is equal to number 5", ()=>{
        expect(checkFive(5)).toBe("5 is equal to 5.")
    });


})