var myClass = function() {

};

myClass.prototype.rangeNumbers = function(num1, num2) {
    var newArr = [], aux;
    if (num2 < num1) {
        aux = num2;
        num2 = num1;
        num1 = aux;
    }
    for (var i = num1; i <= num2; i++) {
        newArr.push(i);
    }
    return newArr;
};

myClass.prototype.sumOfElements = function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

myClass.prototype.evenNumbers = function(arr, newArr) {
    var elem = arr.shift();
    if (elem % 2 === 0) {
        newArr.push(elem);
    }
    if (arr.length) {
        return this.evenNumbers(arr, newArr);
    }
    return newArr;
};

myClass.prototype.dropWhileRuby = function(arr, newArr) {
    var elem = arr.shift();
    if (elem > 7) {
        newArr.push(elem);
    }
    if (arr.length) {
        return this.dropWhileRuby(arr, newArr);
    }
    return newArr;
};

var c = new myClass();
console.log(c.rangeNumbers(1,5));
console.log(c.sumOfElements([1,2,3,4,5,6]));
console.log(c.evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], []));
console.log(c.dropWhileRuby([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], []));
