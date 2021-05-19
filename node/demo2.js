const fs = require('fs');

console.log(222)
 fs.readFile('./1.txt',function(err,data){
    console.log(data)
})
console.log(333)

