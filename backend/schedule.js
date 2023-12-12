const { exec } = require('child_process');
const cron = require('node-cron');

// Schedule the task to run every day at 12:00 AM
let scheduledTask = cron.schedule('0 2 * * *', () => {
    runTask()
});

const runTask = () => {
    exec('python youtubescan.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return;
        }
        console.log(`Command output: ${stdout}`);
    });
    exec('python deepmind.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return;
        }
        console.log(`Command output: ${stdout}`);
    });
    exec('python zapier.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return;
        }
        console.log(`Command output: ${stdout}`);
    });
    exec('python automate.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return;
        }
        console.log(`Command output: ${stdout}`);
    });
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