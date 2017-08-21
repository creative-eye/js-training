// Implement a class that uses for loops for the 1st 2 points and recursion for all:
// Range between two positive numbers
// myFunction(1, 5) #=> [1, 2, 3, 4, 5]

/*function rangeBetweenTwoNo(start,stop){
 var stockNo = [];
 if((start && stop) >= 0){
 for( var i = start; i <= stop; i++){
 stockNo.push(i);
 }
 }
 return stockNo;
 };
 var a = rangeBetweenTwoNo(1,5);
 console.log(a);*/
//
var classRange = ( function() {
    return {
        rangeBetweenTwoNo:
            function (start,stop){
                var stock = [];
                if((start && stop) >= 0){
                    for( var i = start; i <= stop; i++){
                        stock.push(i);
                    }
                }
                return stock;
            }
    }
})();
console.log( classRange.rangeBetweenTwoNo(2,4) );
