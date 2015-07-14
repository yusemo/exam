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