//2乗ずつ増加する数列の和(公式)
// n
// ∑k2
// k=1
 
'use strict'


function shiguma(offset, length){
    return (length * ((length+1)*(2*length+1))) / 6;
}
let result = shiguma(1, 3);

console.log(result);

