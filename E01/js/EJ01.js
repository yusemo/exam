/**
 * Created by nailuoGG on 15/7/14.
 */

//字符串去空格（为String对象函数扩展一个trim函数）

String.prototype.trim =  function() {
    if (!this) return this;

    return this.replace(/\s+/g,"");
};

String.prototype.trim = function(){return this.replace(/^\s+|\s+$/g, "");};

//空格有前后位置的区别 
