
// 1. Call Stack (synchronous execution)
console.log("1. Call Stack:");
function one() { console.log("One"); }
function two() { console.log("Two"); }
function three() { console.log("Three"); }
one();
two();
three();

console.log("\n");

// 2. setTimeout (macrotask queue)
console.log("2. setTimeout (Macrotask):");
console.log("Start");
setTimeout(() => {
  console.log("Inside setTimeout (after 0ms)");
}, 0);
console.log("End");

console.log("\n");

// 3. Promises (microtask queue)
console.log("3. Promise (Microtask):");
console.log("Start");
Promise.resolve().then(() => {
  console.log("Promise resolved");
});
console.log("End");

console.log("\n");

// 4. Promise vs setTimeout priority
console.log("4. Promise vs setTimeout:");
console.log("Start");
setTimeout(() => console.log("setTimeout callback"), 0);
Promise.resolve().then(() => console.log("Promise callback"));
console.log("End");

console.log("\n");

// 5. Async/Await behavior
console.log("5. Async/Await:");
async function demo() {
  console.log("A");
  await Promise.resolve(); // goes to microtask queue
  console.log("B");
}
console.log("C");
demo();
console.log("D");

console.log("\n");

// 6. Multiple microtasks before macrotasks
console.log("6. Multiple Promises vs setTimeout:");
setTimeout(() => console.log("Macrotask 1 (setTimeout)"), 0);

Promise.resolve().then(() => console.log("Microtask 1 (Promise 1)"));
Promise.resolve().then(() => console.log("Microtask 2 (Promise 2)"));

setTimeout(() => console.log("Macrotask 2 (setTimeout)"), 0);

console.log("Synchronous Code End");
