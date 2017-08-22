var Homework = function () {
this.a = '';
this.b='';
};

Homework.prototype.range = function (a, b) {
    const array = [];
    for (a; a <= b; a++) {
        array.push(a);
    }
    return array;
};

Homework.prototype.sumOfRange = function (array) {
    return array.reduce(function (sum, value) {
        return sum + value;
    }, 0);
};

Homework.prototype.rubySelect = function (array, newArray) {
    if (array.length) {
        if (array[0] % 2 === 0) {
            newArray.push(array[0]);
        }
        array.shift();
    } else {
        return newArray;
    }
    return this.rubySelect(array, newArray);
};

Homework.prototype.rubyDropWhile = function (array, newArray) {
    if (array.length) {
        if (array[0] > 2) {
            newArray.push(array[0]);
        }
        array.shift();
    } else {
        return newArray;
    }
    return this.rubyDropWhile(array, newArray);
};

var range =new Homework().range(1, 6);
console.log('range', range);

var sum = new Homework().sumOfRange(range);
console.log('sum', sum);

var select = new Homework().rubySelect([1, 2, 3, 4, 5, 6], []);
console.log('select',select);

var dropwhile = new Homework().rubyDropWhile([1, 2, 3, 4, 5, 6, 7], []);
console.log('dropwhile',dropwhile);
