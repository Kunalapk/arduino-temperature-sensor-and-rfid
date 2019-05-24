var SerialPort = require('serialport');
var readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var PORT = process.argv[2]
var BAUDRATE = parseInt(process.argv[3])
var port = new SerialPort(PORT, {baudRate: BAUDRATE});

rl.on('line', (line) => {
    port.write(line, function(err, resp) {
        console.log("data write")
        rl.prompt();
    })
});

port.on('data', function (data) {
    console.log(data.toString());
});