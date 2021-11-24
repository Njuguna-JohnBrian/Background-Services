const { parentPort, workerData } = require("worker_threads");

const getFib = (num) => {
    if(num === 0) return 0;
    if(num === 1) return 1;
    if(num > 1) return getFib(num - 1) + getFib(num - 2);
}


//we receive data from the parent through the workerData option.
const result = getFib(workerData.num);

// we use the parentPort to post the result to the parent thread after we are done with the computation
parentPort.postMessage(result);