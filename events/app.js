const events = require('events');

// const { EventEmitter } = require('events');

const eventEmitter = new events.EventEmitter();

// const eventEmitter = new EventEmitter();

const getFib = (num) => {
    if(num === 0) return 0;
    if(num === 1) return 1;
    if(num > 1) return getFib(num - 1) + getFib(num - 2);
}

eventEmitter.on('fibonacci', data => {
    setTimeout(() => {
        const result = getFib(data.num);
        console.log(`${data.num}th fibonacci Number: ${result}`)
    })
})

eventEmitter.emit('fibonacci', { num: 40 });

console.log("Execution in the parent thread complete");