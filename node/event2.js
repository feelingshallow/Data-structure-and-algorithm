let EventEmitter = require('events').EventEmitter

let event = new EventEmitter();
event.on('timeout',function(para1,para2){
    console.log('timeout 已触发',para1,para2);
})

setTimeout(()=>{
    event.emit('timeout','ssss','cvbbb')
},2000)