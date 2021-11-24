const { parentPort } = require("worker_threads");

parentPort.on("message", data => {
    parentPort.postMessage({ num: data.num, fib: getFib(data.num)})
})

const getFib = (num) => {
    if(num === 0) return 0;
    if(num === 1) return 1;
    if(num > 1) return getFib(num - 1) + getFib(num - 2);
}