const cron = require('node-cron');

const tasks = [22, 30, 41, 25];

const getFib = (num) => {
    if(num === 0) return 0;
    if(num === 1) return 1;
    if(num > 1) return getFib(num - 1) + getFib(num - 2);
}

cron.schedule('* * * * * *', () => {
    console.log("The task is running every second : " + new Date());

    // check to see if there is any job to run
    if(tasks.length > 0) {
        const task = tasks.splice(0, 1);
        const result = getFib(task);
        console.log(`${task}th Fibonacci Number: ${result}`);
    }
});

console.log("----- TASK COMPLETED -----")