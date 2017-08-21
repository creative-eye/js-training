//!* Implement Ruby's `drop_while` in JavaScript.
// Example: iterating over [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and only returning integers greater than 7.
// drop_while: http://ruby-doc.org/core-2.2.3/Enumerable.html#method-i-drop

function greaterThen(inputData,max){
    var index = 0;
    while( index < inputData.length ) {
        if (inputData[index] <= 7 ){
            inputData.splice(index, 1);
        }else{
            index++;
        }
    }
    return inputData;
}
console.log(greaterThen(inputData,max));


var result = [];
function recursionGreaterThen(inputData,max,index){
    if (inputData[index] >= max ){
        result.push(inputData[index]);
    }
    if( index < inputData.length ) {
        return recursionGreaterThen(inputData,max,index+1);
    }
}
recursionGreaterThen(array,7,0);
console.log(result);