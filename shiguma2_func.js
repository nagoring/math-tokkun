//2乗ずつ増加する数列の和
// n
// ∑k2
// k=1
 
'use strict'


function shiguma(offset, length, func){
    let sum = 0;
    return func(sum, offset, length);
}
function calc(sum, number, length){
    let result = Math.pow(number, 2);
    sum += result;
    let current = number + 1;
    if(current > length){
        return sum;
    }
    return calc(sum, current, length)
}
let result = shiguma(1, 4, calc)

console.log(result);

