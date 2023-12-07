const express = require('express')
const spawn = require('child_process').spawn;

const app = express();

app.get('/', (req, res) => {
    const pythonProcess = spawn('python', ['./scan.py']);
    var d = '';
    var e = '';

    pythonProcess.stdout.on('data', data => {
      d += data;
    });

    pythonProcess.stderr.on('data', data => {
      e += data;
    });

    pythonProcess.on('close', code => {
      res.json({ data: d, error: e });
    });
});

app.listen(5000);