//2乗ずつ増加する数列の和
// n
// ∑k2
// k=1
 
'use strict'

function shiguma(offset, length, func){
    let result = 0;
    for(let i=offset;i<=length;i++){
        result += calc(i);
    }
    return result;
}
function calc(number){
    return Math.pow(number, 2);
}
let result = shiguma(1, 2)

console.log(result);

