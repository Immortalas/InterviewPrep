function main(){
console.log('A');
setTimeout(
function print(){ console.log('B'); }
,0);
console.log('C');
}
main();

// Outputs:
// 1: A B C
// 2: A C B // TRUE
// 3: B A C
// 4: C A B

// Explanation:
// In JavaScript, the event loop handles asynchronous operations like setTimeout. When main() is called, it first logs 'A'. Then, setTimeout is called with a delay of 0 milliseconds, which means the callback function (that logs 'B') is scheduled to run after the current call stack is cleared. Next, 'C' is logged immediately. After the main function completes and the call stack is empty, the event loop picks up the callback from setTimeout and executes it, logging 'B'. Therefore, the order of output is 'A', 'C', 'B'.