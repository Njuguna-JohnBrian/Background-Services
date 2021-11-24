const { StaticPool } = require('node-worker-threads-pool');

// Create a static worker pool with 8 workers
const pool = new StaticPool({
    size: 8,
    task: './worker.js'
})

pool.exec({ num: num }).then( result => [
    console.log(`${result.num}th Fibonacci Number: ${result.fib}`)
]);
pool.exec({ num: num }).then( result => [
    console.log(`${result.num}th Fibonacci Number: ${result.fib}`)
]);
pool.exec({ num: num }).then( result => [
    console.log(`${result.num}th Fibonacci Number: ${result.fib}`)
]);

console.log("Execution in the parent thread complete");