let calc = require('../src/simpleCalculator2');
let calculator = new calc;

console.log(calculator.add(1,2,1,10,36));
console.log(calculator.multiply(1,2,5,5));
console.log(calculator.last(Number));


describe("simple calculator to add  values", function () {
    it("should add  values", function () {
        expect(calculator.add(1,1)).toEqual(2);
    });

    it("should be able to add multiple values", function() {
        expect(calculator.add(1,2,3,4)).toEqual(10);
    });
});



describe("simple calculator to multiply multiple values", function () {
    it("should multiply  values", function () {
        expect(calculator.multiply(1,2,3,4)).toEqual(24);
    });
    it("should be able to  multiply 2 values", function() {
        expect(calculator.multiply(2,5)).toEqual(10);
    });
});