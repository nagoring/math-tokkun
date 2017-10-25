//シンプルなΣ　単純に増加する数列の和
//
// n
// ∑k
// k=1

"use strict";

function shiguma(offset, limit, func){
    var sum = 0;
    var plus = 1;
    return func(sum, limit, offset, plus);
}
function calc(sum, limit, offset, plus){
    sum += plus;
    console.log("limit="+limit + ",sum="+sum);
    plus++;
    limit--;
    if(offset <= limit){
        return calc(sum,  limit, offset, plus);
    }
    return sum;
    
}

var result = shiguma(1, 9, calc);



console.log(result);