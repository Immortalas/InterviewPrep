# Event Loop in JavaScript

The event loop is the heart of JavaScript's asynchronous operation. It is a mechanism that handles the execution of code, allowing for asynchronous operations and ensuring that the single-threaded nature of JavaScript engines does not block the execution of the program.

## Parts of the Event Loop

To understand it better, we need to understand all the parts of the system. These components are part of the event loop:

### Call Stack
The call stack keeps track of the functions being executed in a program. When a function is called, it is added to the top of the call stack. When the function completes, it is removed from the call stack. This allows the program to keep track of where it is in the execution of a function and return to the correct location when the function completes. As the name suggests, it is a stack data structure that follows last-in-first-out (LIFO).

### Web APIs/Node.js APIs
Asynchronous operations like `setTimeout()`, HTTP requests, file I/O, etc., are handled by Web APIs (in the browser) or C++ APIs (in Node.js). These APIs are not part of the JavaScript engine and run on separate threads, allowing them to execute concurrently without blocking the call stack.

### Task Queue / Macrotask Queue / Callback Queue
The task queue, also known as the macrotask queue, callback queue, or event queue, is a queue that holds tasks that need to be executed. These tasks are typically asynchronous operations, such as callbacks passed to web APIs (`setTimeout()`, `setInterval()`, HTTP requests, etc.), and user interface event handlers like clicks, scrolls, etc.

### Microtasks Queue
Microtasks are tasks that have a higher priority than macrotasks and are executed immediately after the currently executing script is completed and before the next macrotask is executed. Microtasks are usually used for more immediate, lightweight operations that should be executed as soon as possible after the current operation completes. There is a dedicated microtask queue for microtasks. Microtasks include:
- Promise callbacks (`then()`, `catch()`, and `finally()`)
- `await` statements
- `queueMicrotask()`
- `MutationObserver` callbacks

## Event Loop Order

1. The JavaScript engine starts executing scripts, placing synchronous operations on the call stack.
2. When an asynchronous operation is encountered (e.g., `setTimeout()`, HTTP request), it is offloaded to the respective Web API or Node.js API to handle the operation in the background.
3. Once the asynchronous operation completes, its callback function is placed in the respective queues – task queues (macrotask queues) or microtask queues.
4. The event loop continuously monitors the call stack and executes items on the call stack. If/when the call stack is empty:
   - The microtask queue is processed. The event loop takes the first callback from the microtask queue and pushes it to the call stack for execution. This repeats until the microtask queue is empty.
   - The macrotask queue is processed. The event loop dequeues the first callback from the macrotask queue and pushes it onto the call stack for execution. 
   - After processing each macrotask, the event loop checks the microtask queue again before proceeding to the next macrotask.
5. This process continues indefinitely, allowing the JavaScript engine to handle both synchronous and asynchronous operations efficiently without blocking the call stack.

## Example

The following code logs some statements using a combination of normal execution, macrotasks, and microtasks:

```javascript
console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
});

setTimeout(() => {
  console.log('Timeout 2');
}, 0);

console.log('End');
```

### Console Output:
```
Start
End
Promise 1
Timeout 1
Timeout 2
```

### Explanation of the Output:
1. `Start` and `End` are logged first because they are part of the initial script.
2. `Promise 1` is logged next because promises are microtasks and microtasks are executed immediately after the items on the call stack.
3. `Timeout 1` and `Timeout 2` are logged last because they are macrotasks and are processed after the microtasks.