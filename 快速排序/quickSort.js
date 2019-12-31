
// 从数列中挑出一个元素，称为 “基准”（pivot）;
// 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
// 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序；

function quickSort(arr) {
    if(arr.length <= 1 ) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
   
    const midValue = arr.splice(mid, 1);

    const left = [];
    const right = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < midValue) {
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(midValue, ...quickSort(right));
    
}


console.log(quickSort([3, 1, 5, 7, 2, 4, 9, 6, 10, 8]));