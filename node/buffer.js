//创建一个长度为10
const buf1 = Buffer.alloc(23);
let cc= buf1.write('hello,world')
console.log(buf1)
console.log(cc)
console.log(buf1.toString())