function bind(fn,context){
  return function(){
      return fn.apply(context,arguments)
  }
}
// 这个函数似乎简单，但是功能是很强大的。在bind（）中创建了一个闭包，闭包使用