//* Implement Ruby's `select` in JavaScript.
// Example: iterating over [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and only returning even numbers.

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function select(inputData){
    var index = 0;
    while( index < inputData.length ) {
        if (inputData[index] % 2 != 0 ){
            inputData.splice(index, 1);
        }else{
            index++;
        }
    }
    return inputData;
}

console.log(select(array));

var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var rez2 = [];
function recursionSelect(inputData,index){
    if (inputData[index] %2 === 0 ){
        rez2.push(inputData[index]);
    }
    if( index < inputData.length ) {
        return recursionSelect(inputData,index+1);
    }
}

recursionSelect(array2,0);
console.log(rez2);
