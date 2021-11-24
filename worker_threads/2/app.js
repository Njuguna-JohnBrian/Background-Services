/**
 * Fibonacci Sequence:
 * series of numbers where the next number is found by adding up the two numbers before it
 * e.g 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 */

 const { Worker } = require("worker_threads");

 //Create new worker
 const worker = new Worker("./worker.js");
 
 // Listen for a message from worker
 worker.on("message", result => {
   console.log(`${result.num}th Fibonacci Number: ${result.fib}`);
 });
 
 // Listen for errors
 worker.on("error", error => {
   console.log("error::", error);
 });
 
 // Listen for completion
 worker.on("exit", exitCode => {
   console.log("exitCode:: ", exitCode);
 })
 
 console.log("Execution in the parent thread completed");
 
 worker.postMessage({ num: 10 });
 worker.postMessage({ num: 42 });
 worker.postMessage({ num: 20 });
 worker.postMessage({ num: 30 });