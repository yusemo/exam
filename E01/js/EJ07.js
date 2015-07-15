/**
 * Created by nailuoGG on 15/7/14.
 */
//7 如何把对象转换为数组

//把对象转化成json
//再把json转换成数组
//
//function ob2arr(ob) {
//   var  obJson = JSON.stringify(ob);
//    var b = JSON.parse(obJson);
//return b;
//}


function ob2arr(ob) {
    var arr = [];
    for (var i in ob) {
        arr.push(ob[i]);
    }
return arr;
}

b = {
    name: "nailuoGG",
    id: "123456789"
};

ob2arr(b);


/*  arguments对象转换为数组
一般指定对象转换成数组是指伪对象arguments
函数内的arguments 对象，有人称之为“类数组”对象，
因为它具有数组的一些特性：拥有length 属性、并且用数字索引存放着参数以便访问，可大家都知道其实它并不是数组。

有的时候需要将参数列表看作一数组，以便使用数组的一些方法（如concat, splice 等）进行操作，这就要想办法做一个转换，

(function() {

aArguments = Array.prototype.slice.apply(arguments);

})(1,2,3);

 也可以简单写成

(function() {
var aArguments = [].slice.apply(arguments);

})(1,2,3);

 

此时aArguments 已经是参数数组[1, 2, 3] 了。

slice 方法确实可用于拷贝数组，但它是属于数组的方法，直接arguments.slice() 肯定是不行的。上面的方法则比较巧妙，它利用了arguments 对象的那些数组特性，然后通过apply 使自身运用于数组的slice 方法，以达到转换为数组类型的效果。

补充：在这里使用了[].forEach.call而不是Array.prototype.forEach.call，二者等价，但是前者可以节省几个字节。

下面一个小例子：

使用mySort()能将传入的参数按照从小到大的顺序显示出来

function mySort(){

var args=new Array();   //使用数组作为参数存储容器

//补充代码

return args;

}

var result=mySort(50,11,16,24,88,57,…,10); //传入的参数个数不定

console.log(result);

 
下面是补充代码：

//           方法1

//          args=args.slice.call(arguments).sort(function(a,b){return a-b})

//           方法2

//            for(var i=0;i<arguments.length;i++) {

//                args[i]=arguments[i];

//            }

//           args.sort(function(n1,n2){

//                return n1-n2;

//            });


 */

