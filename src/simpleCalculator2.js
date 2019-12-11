module.exports = class SimpleCalculator2 {
    constructor() {
        this.numberStorage = [];
        this.number = 0;
    }

    add(...args){
        var sum = 0;
        for (var i = 0; i  < arguments.length ; i++){
            sum += arguments[i];
            this.number = sum;

        }
        return sum;
    }
    
     multiply(...args){
        var product = 1;
        for (var j = 0; j  < arguments.length ; j++){

            product *= arguments[j];
            this.number = product;
    
        }
        return product;
    }
    last() {
        return this.number;
    }
    set slot(num) {
       this.numberStorage.push[number - 1];
        let slot = this.arr[number - 1];
        return slot;
    
        }
    get slot() {
        return this.slot_numberStorage[n-1];
        }

}
