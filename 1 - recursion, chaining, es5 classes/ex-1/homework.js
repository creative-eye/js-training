var Homework = function () {
    this.a = null;
    this.b =null;
};

Homework.prototype.range = function (a, b) {
    this.a =a;
    this.b =b;
    const array = [];
    if (a > b) {
        this.a = b;
        this.b = a;
    }
    for (this.a; this.a <= this.b; this.a++) {
        array.push(this.a);
    }
    return array;
};

Homework.prototype.sumOfRange = function (array) {
    return array.reduce(function (sum, value) {
        return sum + value;
    }, 0);
};

Homework.prototype.rubySelect = function (array) {
    var index = array.indexOf(array[i]);
    if (index > -1) {
        if (array[i] % 2 !== 0) {
            array.splice(index, 1);
        } else {
            i++;
        }
    } else {
        return array;
    }
    return this.rubySelect(array);
};

Homework.prototype.rubyDropWhile = function (array) {
    var index = array.indexOf(array[j]);
    if (index > -1) {
        if (array[j] > 3) {
            j++;
        } else {
            array.splice(index, 1);
        }
    } else {
        return array;
    }
    return this.rubyDropWhile(array);
};

var range = new Homework().range(10, 6);
console.log('range', range);

var sum = new Homework().sumOfRange(range);
console.log('sum', sum);

var i = 0;
var select = new Homework().rubySelect([1, 2, 3, 4, 5, 6]);
console.log('select', select);

var j =0;
var dropWhile = new Homework().rubyDropWhile([1, 2, 3, 4, 5, 6, 7]);
console.log('dropWhile', dropWhile);
