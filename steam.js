const fs = require('fs');

const readSteam = fs.createReadStream('./docs/large.txt');
const writeSteam = fs.createWriteStream('./docs/large-write.txt');

// pipe

// readSteam.on('data', function(data) {
//     writeSteam.write(data.toString())

//     writeSteam.write('-----------------New Chunk-----------------')
// })

readSteam.pipe(writeSteam);