//シンプルなΣ
//
// n
// ∑k
// k=1
 


function shiguma(offset, limit, func){
    var sum = 0;
    var plus = 1;
    return func(func, sum, limit, offset, plus);
}

var result = shiguma(1, 9, (func, sum, limit, offset, plus)=>{
    sum += plus;
    console.log("limit="+limit + ",sum="+sum);
    plus++;
    limit--;
    if(offset <= limit){
        return func(func, sum,  limit, offset, plus);
    }
    return sum;
});
console.log(result);