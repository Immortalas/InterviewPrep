console.log(10 == [10]);
console.log(10 == [[[[[[[10]]]]]]]);

// output: true true

console.log([0] == false);
if([0]) {
console.log("I'm True");
} else {
console.log("I'm False");
}

// output: true I'm True
// explanation: In the first case, [0] is converted to "0" and then to 0 before comparison. In the second case, [0] is a non-empty array, which is truthy.