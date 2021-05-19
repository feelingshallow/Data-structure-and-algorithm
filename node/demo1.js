const fs = require('fs');
console.log(111)
let file = fs.readFileSync('./1.txt');
console.log(file.toString());
console.log(333)
