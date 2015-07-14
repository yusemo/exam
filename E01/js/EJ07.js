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
