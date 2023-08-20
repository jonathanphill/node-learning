// Node runs on a server= not in a browser(backend not frotend)
// The console is the terminal window
console.log("Hello World");
//Has global object instead of window object
// console.log(global);
// Has common core modules that we will explore
// Common JS modules instead of ES6 modules
// Missing some JS API's like fetch

const os = require('os');
const path = require('path');
const{add, multiply, subtract,divide} = require('./math');

console.log(add(2, 3));
console.log(multiply(2, 3));
console.log(subtract(2, 3));
console.log(divide(2, 3));

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// // console.log(__dirname);
// // console.log(__filename);


// console.log(path.dirname(__filename));  // same as using console.log(__dirname);
// console.log(path.basename(__filename)); // same as using console.log(__filename);
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));

