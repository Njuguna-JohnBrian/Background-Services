/*
*   Everyone knows the fibonacci series.
*   e.g; 0, 1, 1, 2, 3, 5, 8 ......
*/

const { Worker } = require('worker_threads');

const num = 41;

const worker = new Worker("./worker.js", { workerData: { num } });

worker.once("message", result => {
    console.log(`${num}th Fibonacci Number: ${result}`);
});

worker.on("error", error => {
    console.log("error:: ", error);
});

worker.on("exit", exitCode => {
    console.log("exit:: ", exitCode);
});

console.log("Execution in the parent thread complete");