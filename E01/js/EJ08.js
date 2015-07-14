/**
 * Created by nailuoGG on 15/7/14.
 */
//8
//var name = "The Window”;
//var object = {
//    name : "My Object",
//    getNameFunc : function(){
//        return (function(){
//            alert(this.name);
//        })();
//    },
//
//    getName:function(){
//        alert(this.name);
//    }
//};
//object.getNameFunc();  输出？
//object.getName();  输出？
//修改代码把2个都输出My Object

var name = "The Window”;

var object = {
    name : "My Object",
    getNameFunc : function(){
        return (function(){
            alert(this.name);
        })();
    },

    getName:function(){
        alert(this.name);
    }
};
object.getNameFunc(); //输出 The Window
object.getName(); //输出 My Object


修改后
var object = {
    name : "My Object",
    getNameFunc : function(){
        return (function(){
            alert(object.name);
        })();
    },

    getName:function(){
        alert(this.name);
    }
};