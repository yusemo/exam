/**
 * Created by nailuoGG on 15/7/14.
 */

//字符串去空格（为String对象函数扩展一个trim函数）

String.prototype.trim =  function() {
    if (!this) return this;

    return this.replace(/\s+/g,"");
};