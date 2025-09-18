var myChars = ["a", "b", "c", "d"];
delete myChars[0];
console.log(myChars);
console.log(myChars[0]);
console.log(myChars.length);

// Outputs:
// 1: [empty, 'b', 'c', 'd'], empty, 3
// 2: [null, 'b', 'c', 'd'], empty, 3
// 3: [empty, 'b', 'c', 'd'], undefined, 4 // TRUE
// 4: [null, 'b', 'c', 'd'], undefined, 4

// Explanation:
// The delete operator removes a property from an object. When used on an array, it removes the element at the specified index but does not affect the length of the array. Instead, it leaves an empty slot at that index. Therefore, after deleting myChars[0], the array still has a length of 4, but the first element is now undefined.