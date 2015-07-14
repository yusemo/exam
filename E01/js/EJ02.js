/**
 * Created by nailuoGG on 15/7/14.
 */
//2、数组arr1和arr2，长度不固定，如何从arr1中删除和arr2中重复值的元素？（假设是纯数字的）

function removeDuplicate(arr1, arr2) {

    for (var index1 in arr1) {
        for (var index2 in arr2) {
            if (arr1[index1] == arr2[index2]) {
                arr1.splice[index1,1];
            }
        }
    }

}