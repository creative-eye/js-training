class AssessmentClass {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.arr = [];
        this.result = null;
    }

    Range() {
        for (var i = this.x; i <= this.y; i++) {
            this.arr.push(i);
        }
        console.log(this.arr);
        return this;

    }

    Sum() {
        this.result = 0;
        for (var i = 0; i < this.arr.length; i++) {
            this.result = this.result + this.arr[i];
        }
        console.log(this.result);
        return this;
    }

    Select(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                console.log(arr[i]);
            }

        }
        return this;
    }

    Select2(arr) {
        var temparr = arr.slice();
        var output = [];

        var result = function (a) {
            if (a.length !== 0) {
                var temp = a[0];
                if (a.shift() % 2 === 0) {
                    output.push(temp);
                }
                return result(a);
            } else {
                console.log(output);
                return output;
            }

        };
        result(temparr)
    }

    Drop_while(arr, num) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > num) {
                console.log(arr[i]);
            }
        }
        return this;
    }

    Drop_while2(arr, num) {
        var temparr = arr.slice();
        var output = [];

        var result = function (a) {
            if (a.length !== 0) {
                var temp = a[0];
                if (a.shift() > num) {
                    output.push(temp);
                }
                return result(a);
            } else {
                console.log(output);
                return output;
            }
        };
        result(temparr);

    }
}

var arrayConstructor = function () {
    var localarr = [];
    for (i = 1; i <= 10; i++) {
        localarr.push(i);
    }
    return localarr;
};

var array = arrayConstructor();
var num = 7;

var Assessment = new AssessmentClass(3, 7);

Assessment.Range().Sum();
/*
Assessment.Select(array);
*/
Assessment.Select2(array);
/*
Assessment.Drop_while(array, num);
*/
Assessment.Drop_while2(array, num);