const obj = {
prop1: function() { return 0 },
prop2() { return 1 },
['prop' + 3]() { return 2 }
}
console.log(obj.prop1());
console.log(obj.prop2());
console.log(obj.prop3());

// Outputs:
// 1: 0, 1, 2 // TRUE
// 2: 0, { return 1 }, 2
// 3: 0, { return 1 }, { return 2 }
// 4: 0, 1, undefined