var HomeworkClass = function(){

};

HomeworkClass.prototype.range = function(firstNumber, secondNumber){
    var result = [];
    for(var i = firstNumber; i <= secondNumber; i++){
        result.push(i);
    }
    return result;
};

HomeworkClass.prototype.sum = function(arr){
    var result = 0;
    arr.forEach(function(item){
        result += item;
    });
    return result;
};

HomeworkClass.prototype.select = function(arr){
    var counter = 0;
    do {
        if(arr[counter] % 2 == 0){
            console.log(arr[counter])
        }
        counter++;
    } while(counter < arr.length)

};

HomeworkClass.prototype.dropWhile = function(arr){
    arr.forEach(function(item){
        if(item > 7){
            console.log('item', item);
        }
    });

};



var example = new HomeworkClass();

console.log('example.range(1, 5);', example.range(1, 5));
console.log('example.sum([1, 2, 3, 4, 5, 6])', example.sum([1, 2, 3, 4, 5, 6]));
console.log('example.select([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])', example.select([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log('example.select([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])', example.dropWhile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));