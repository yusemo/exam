/**
 * Created by nailuoGG on 15/7/14.
 */

//4、写出一个classof函数用于类型检测，最后输出为
//
//classof(null) // "Null"
//classof(1)    //“Number"
//classof(“”) // “String"
//classof(false)    //“Boolean"
//classof({}) // “Object"
//classof(［］)    //“Array”
//


function classOf(typeClass) {
    var type = typeof typeClass;
    if (typeClass == null) return "Null";
    switch (type) {
        case "number": return "Number";
        case "boolean": return "Boolean";
        case "array": return "Array";
        case "string": return "String";
        case "undefined": return "Undefined";
        case "object": return "Object";
    }
}