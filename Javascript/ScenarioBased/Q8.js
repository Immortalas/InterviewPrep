var array1 = new Array(3);
console.log(array1);
var array2 = [];
array2[2] = 100;
console.log(array2);
var array3 = [,,,];
console.log(array3);

// Outputs:
// 1: [undefined × 3], [undefined × 2, 100], [undefined × 3]
// 2: [empty × 3], [empty × 2, 100], [empty × 3] // TRUE
// 3: [null × 3], [null × 2, 100], [null × 3]
// 4: [], [100], []