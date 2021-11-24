const { StaticPool } = require("node-worker-threads-pool");

let num = [40, 30, 20, 15, 10, 5, 25, 35];

// Create a static worker pool with 8 workers

const pool = new StaticPool({
  size: 5,
  task: "./worker.js",
});
num.map((element) => {
  pool
    .exec({ num: element })
    .then((result) => [
      console.log(`${result.num}th Fibonacci Number: ${result.fib}`),
    ]);
});

console.log("Execution in the parent thread complete");
