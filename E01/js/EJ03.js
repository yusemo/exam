/**
 * Created by nailuoGG on 15/7/14.
 */

//2、数组arr1和arr2，长度不固定，如何从arr1中删除和arr2中重复值的元素？（假设是纯数字的）
//3假设不是纯数字而是有其他类型，比如obj、函数等？


//function removeDuplicate(arr1, arr2) {
//
//    for (var index1 in  arr1) {
//        for (var index2 in arr2) {
//            if (arr1[index1] == arr2[index2]) {
//                arr1.splice[index1,1];
//            }
//        }
//    }
//    return arr1;
//}


function removeDuplicate(arr1, arr2) {
    for(var index1 = 0; index1< arr1.length;index1++ ) {
        for (var index2=0; index2 <arr2.length; index2++){
            if(typeof arr1 == typeof arr2 && arr1[index1] == arr2[index2])
            arr1.splice(index1,1);
        }
    }
    return arr1;
}

arr1 = [1,2,3,4,5,6,7,8];
arr2 = [4,5,6,7];

removeDuplicate(arr1,arr2);

/*
    纯数字是可以利用上述的方法。可惜的是假设数组的内容很多的执行效率没有正则匹配的好。参考第二题写的答案。
    但是如果数组里面包含有函数或者对象的时候此方法就匹配不出，建议利用hash表的原理,
    利用hash表。把已经出现过的通过下标的形式存入一个object内。下标的引用要比用indexOf搜索数组快很多。
    但是内存占用方面应该第二种方法比较多，因为多了一个hash表。这就是所谓的空间换时间。 
    
*/

Array.prototype.unique2 = function()
{
    var n = {},r=[]; //n为hash表，r为临时数组
    for(var i = 0; i < this.length; i++) //遍历当前数组
    {
        if (!n[this[i]]) //如果hash表中没有当前项
        {
            n[this[i]] = true; //存入hash表
            r.push(this[i]); //把当前数组的当前项push到临时数组里面
        }
    }
    return r;
}
console.log([1,2,3,'1','2','3',1,2].unique2())

/*
    先把数组排序，然后比较相邻的两个值。排序的时候用的JS原生的sort方法，JS引擎内部应该是用的快速排序。
*/    

Array.prototype.unique3 = function(){
    this.sort();
    var re=[this[0]];
        for(var i = 1; i < this.length; i++)
        {
            if( this[i] !== re[re.length-1])
            {
                re.push(this[i]);
            }
        }
    return re;
}



/*思路4：

利用数组的indexOf方法。此方法的目的是寻找存入参数在数组中第一次出现的位置。
很显然，js引擎在实现这个方法的时候会遍历数组直到找到目标为止。所以此函数会浪费掉很多时间。

*/
Array.prototype.unique4 = function()
{
    var n = [this[0]]; //结果数组
    for(var i = 1; i < this.length; i++) //从第二项开始遍历
    {
        //如果当前数组的第i项在当前数组中第一次出现的位置不是i，
        //那么表示第i项是重复的，忽略掉。否则存入结果数组
        if (this.indexOf(this[i]) == i) n.push(this[i]);
    }
    return n;
}
    
