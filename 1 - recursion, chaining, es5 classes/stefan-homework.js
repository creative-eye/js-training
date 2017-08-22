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
    if(arr.length == 0){
        return;
    }
    var result;
    if(arr[0] % 2 == 0){
        result = arr[0];
        arr.splice(0, 1);
        console.log('result', result);
        return this.select(arr);
    } else {
        arr.splice(0, 1);
        return this.select(arr);
    }

};

HomeworkClass.prototype.dropWhile = function(arr){
    if(arr.length == 0){
        return
    }
    var result;
    if(arr[0] > 7){
        result = arr[0];
        arr.splice(0, 1);
        console.log('result', result);
        return this.dropWhile(arr);
    } else {
        arr.splice(0, 1);
        return this.dropWhile(arr);
    }
};



var example = new HomeworkClass();

console.log('example.range(1, 5);', example.range(1, 5));
console.log('example.sum([1, 2, 3, 4, 5, 6])', example.sum([1, 2, 3, 4, 5, 6]));
example.select([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
example.dropWhile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);