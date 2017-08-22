var Class = function() {
    this.start;
    this.stop;
    this.inputData = [];

    this.selectResult = [];
    this.greaterThenResult = [];
};

Class.prototype.setStart = function(start) {
    this.start = start;
    return this;
};
Class.prototype.setStop = function(stop) {
    this.stop = stop;
    return this;
};
Class.prototype.setInputData = function(inputData) {
    this.inputData = inputData;
    return this;
};

/*ex1*/
Class.prototype.rangeBetweenTwoNo = function() {
        var stock = [];
        if((this.start && this.stop) >= 0){
            for( var i = this.start; i <= this.stop; i++){
                stock.push(i);
            }
        }
        console.log( stock );
};

/*ex2*/
Class.prototype.sumData = function() {
    var sum = 0;
    for( var i = 0; i < this.inputData.length; i++ ){
        if(isNaN(this.inputData[i])){
            sum = false;
        }else{
            sum += this.inputData[i];
        }
    }
    console.log( sum );
};

/*ex3*/
Class.prototype.recursionSelect = function(inputData, index) {
        if (inputData[index] %2 === 0 ){
            this.selectResult.push(inputData[index]);
        }
        if( index < inputData.length ) {
            return this.recursionSelect(inputData, index + 1);
        }
        console.log(this.selectResult);
};

/*ex4*/
Class.prototype.recursionGreaterThen = function(inputData, max, index) {
    if (inputData[index] >= max ){
        this.greaterThenResult.push(inputData[index]);
    }
    if( index < inputData.length ) {
        return this.recursionGreaterThen(inputData,max,index+1);
    }
    console.log(this.greaterThenResult);
};

var array = [1,9];
var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*ex1*/
var range = new Class();
range.setStart(1);
range.setStop(5);
range.rangeBetweenTwoNo();

/*ex2*/
var sum = new Class();
sum.setInputData(array);
sum.sumData();

/*ex3*/
var select = new Class();
select.recursionSelect(array2,0);

/*ex4*/
var greaterThen = new Class();
greaterThen.recursionGreaterThen(array2,7,0);


