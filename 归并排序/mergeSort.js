
// 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列；
// 设定两个指针，最初位置分别为两个已经排序序列的起始位置；
// 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置；
// 重复步骤 3 直到某一指针达到序列尾；
// 将另一序列剩下的所有元素直接复制到合并序列尾。


// function mergeSort(arr) {
//     // 当数组长度是1或者0的时候返回。不需要排序
//     if(arr.length < 2) {
//         return arr || [];
//     }
//     let midIndex = Math.floor(arr.length / 2);
//     let left = arr.slice(0, midIndex);
//     let right = arr.slice(midIndex);
//     return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right){
//     let result = [];
//     while(left.length && right.length) {
//         if(left[0] > right[0]){
//             result.push(right.shift());
//         }else{
//             result.push(left.shift());
//         }
//     }
//     result = result.concat(left, right);
//     return result;
// } 
// console.log('归并排序', mergeSort([3, 1, 5, 7, 2, 4, 9, 6, 10, 8]));



function mergeSort(arr) {
    let len = arr.length;
    if (len < 2) {
        return arr;
    }
    let mid = Math.floor(len / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];

    while(left.length && right.length){
        if(left[0] < right[0]) {
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    return result.concat(left, right);
}

console.log('归并排序', mergeSort([3, 1, 5, 7, 2, 4, 9, 6, 10, 8]));
