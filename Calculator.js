

function add (a,b) {


return  a + b;


}

function addMultiple(...args){
    var sum = 0;
    for (var i = 0; i  < args.length ; i++){
        sum += args[i];

    }
    return sum;
}




function multiply (a,b) {


    return  a * b;
    
    
}

function multipleMultiply(...args){
        var sum = 1;
        for (var j = 0; j  < args.length ; j++){

            sum = (sum * args[j]);
    
        }
        return sum;
    }
module.exports = {
    add,
    addMultiple,
    multiply,
    multipleMultiply
}

console.log(add(4,5));
console.log(addMultiple(1,2,3,4,5,6,7));
console.log(multiply(1,2));
console.log(multipleMultiply(1,2,3,4));
