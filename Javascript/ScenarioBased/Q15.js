console.log( String.prototype.trimLeft.name ==='trimStart' );
console.log( String.prototype.trimLeft.name ==='trimLeft' );
 // output: true    false
// explanation: In modern JavaScript, trimLeft is an alias for trimStart, and the name property reflects the standardized name.


 console.log(Math.max());
// output: -Infinity
// explanation: Math.max() without arguments returns -Infinity, as there are no numbers to compare.


let zero = new Number(0);
if (zero) {
console.log("If");
} else {
console.log("Else");
}
// output: If
// explanation: An object (including a Number object) is always truthy, even if it represents the value 0.