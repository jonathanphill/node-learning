const fs = require('fs');
const path = require('path')
// console.log(path.join(__dirname, "starter.txt"));
const rs = fs.createReadStream(path.join(__dirname, "lorem.txt"), {encoding:'utf8'});

const ws = fs.createWriteStream(path.join(__dirname, "new-lorem.txt"));

// rs.on('data', (dataChunk)=>{
//     ws.write(dataChunk)
// })

rs.pipe(ws);