const event = require('events')
let emObj = new event.EventEmitter()

/* 这里的事件名完全不同于浏览器上的事件 只是一个标识
  其实是绑定了一个事件
*/ 
emObj.on('lxy-1523',function(){
    console.log('触发了')
})

emObj.emit('lxy-1523');
console.log(emObj)