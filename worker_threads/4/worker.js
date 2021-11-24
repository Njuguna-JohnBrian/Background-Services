const { parentPort } = require("worker_threads");

const numb = [20, 30, 10, 45, 23];

function getFib(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return getFib(num - 1) + getFib(num - 2);
}

// Receive a message from the parent thread
parentPort.on("message", data => {

  for(let i = 0; i < numb.length; i++) {
    // Send the result to the parent thread
    parentPort.postMessage({ num: data.numb[i], fib: getFib(data.numb[i]) });
  }
});