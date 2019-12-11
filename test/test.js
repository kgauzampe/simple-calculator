let calculator = require('../Calculator');

describe("simple calculator to add two values", function () {
    it("should add two values", function () {
        expect(calculator.add(1,1)).toEqual(2);
    });
});

describe("simple calculator to add multiple values", function () {
    it("should add many values", function () {
        expect(calculator.addMultiple(1,2,3,4)).toEqual(10);
    });
});

describe("simple calculator to multiply two values", function () {
    it("should multiply two values", function () {
        expect(calculator.multiply(1,2)).toEqual(2); 
    });
});


describe("simple calculator to multiply two values", function () {
    it("should multiply two values", function () {
        expect(calculator.multipleMultiply(1,2,3,4)).toEqual(24);
    });
});