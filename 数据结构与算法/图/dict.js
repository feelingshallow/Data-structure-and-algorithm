// 创建字典的构造函数
 function Dictionary(){
     this.items={}
    //  操作方法
    Dictionary.prototype.set=function(key,value){
        this.items[key]= value
    }
    Dictionary.prototype.has = function(key){
        return this.items.hasOwnProperty(key)
    }
    Dictionary.prototype.remove=function(key){
        // 1.判断是否有
        if(!this.has(key))return false
        delete this.items[key]
        return true
    }
    Dictionary.prototype.get=function(key){
        return this.has(key)? this.items[key] :undefined
    }
    Dictionary.prototype.keys=function(){
        return Object.key(this.items)
    }
    Dictionary.prototype.size=function(){
        return this.keys().length
    }
    Dictionary.prototype.clear=function(){
        this.items={}
    }
   
 }
