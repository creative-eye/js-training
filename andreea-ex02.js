/*
 // Outputs the sum of an array of integers
 // myFunction([1, 2, 3, 4, 5, 6]) #=> 21
 function sumData(InputData){
 var sum = 0;
 for( var i = 0; i < InputData.length; i++ ){
 if(isNaN(InputData[i])){
 sum = false;
 }else{
 sum += InputData[i];
 }
 }
 return sum;
 }
 sumData([1,9]);*/

var classSum = ( function() {
    return {
        sumData:
            function sumData(InputData){
                var sum = 0;
                for( var i = 0; i < InputData.length; i++ ){
                    if(isNaN(InputData[i])){
                        sum = false;
                    }else{
                        sum += InputData[i];
                    }
                }
                return sum;
            }
    }
})();
console.log( classSum.sumData([-1,-9]));

