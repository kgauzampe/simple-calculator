let calc = require('../simpleCalculator2');
let calculator = new calc;

console.log(calculator.add(1,2,1,10,36));
console.log(calculator.multiply(1,2,5,5));
console.log(calculator.last(Number));


describe("simple calculator to add two values", function () {
    it("should add two values", function () {
        expect(calculator.add(1,1)).toEqual(2);
    });
});



describe("simple calculator to multiply two values", function () {
    it("should multiply two values", function () {
        expect(calculator.multiply(1,2,3,4)).toEqual(24);
    });
});