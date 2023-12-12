const { exec } = require('child_process');
const cron = require('node-cron');

// Schedule the task to run every day at 12:00 AM
let scheduledTask = cron.schedule('20 2 * * *', () => {
    runTask()
});
let scheduledTask1 = cron.schedule('25 2 * * *', () => {
    runTask1()
});
let scheduledTask2 = cron.schedule('30 2 * * *', () => {
    runTask2()
});
let scheduledTask3 = cron.schedule('35 2 * * *', () => {
    runTask3()
});
let scheduledTask4 = cron.schedule('40 2 * * *', () => {
    runTask4()
});


const runTask = () => {
    exec('python youtubescan.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return;
        }
        console.log(`Command output: ${stdout}`);
    });
}

const runTask1 = () => {
    exec('python deepmind.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return;
        }
        console.log(`Command output: ${stdout}`);
    });
}
const runTask2 = () => {
    exec('python zapier.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return;
        }
        console.log(`Command output: ${stdout}`);
    });
}
const runTask3 = () => {
    exec('python automate.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return;
        }
        console.log(`Command output: ${stdout}`);
    });
}
const runTask4 = () => {
    exec('python make1.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return;
        }
        console.log(`Command output: ${stdout}`);
    }).then(() => {
        exec('python make3.py', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing command: ${error}`);
                return;
            }
            console.log(`Command output: ${stdout}`);
        }).then(() => {
            exec('python make2.py', (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error executing command: ${error}`);
                    return;
                }
                console.log(`Command output: ${stdout}`);
            });
        });
    });
}
scheduledTask.start()
scheduledTask1.start()
scheduledTask2.start()
scheduledTask3.start()
scheduledTask4.start()