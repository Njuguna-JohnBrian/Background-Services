const { parentPort } = require("worker_threads");

function getFib(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return getFib(num - 1) + getFib(num - 2);
}

// Receive a message from the parent thread
parentPort.on("message", data => {

  // Send the result to the parent thread
  parentPort.postMessage({ num: data.num, fib: getFib(data.num) });
});