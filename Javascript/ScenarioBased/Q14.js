let myNumber = 100;
let myString ='100';
if (!typeof myNumber === "string") {
console.log("It is not a string!");
} else {
console.log("It is a string!");
}
if (!typeof myString ==="number"){
console.log("It is not a number!")
} else {
console.log("It is a number!");
}
// output: It is a string! It is a number!
// explanation: The typeof operator returns a string indicating the type of the unevaluated operand. The negation operator (!) has higher precedence than the equality operator (===), so the expressions are evaluated as (!(typeof myNumber === "string")) and (!(typeof myString === "number")), leading to both conditions being true.