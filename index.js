function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


console.log('冒泡排序', bubbleSort([3, 1, 5, 7, 2, 4, 9, 6, 10, 8]));


function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;

        for (let j = i + 1; j < len; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        const tem = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = tem;

    }
    return arr;
}

console.log('选择排序', selectionSort([3, 1, 5, 7, 2, 4, 9, 6, 10, 8]));



function insertSort(arr) {
    // 从第第二个开始，与前面的每一项做比较
    for(let i = 1; i< arr.length;i++) {
        let preIndex = i - 1;
        // 记录当前的值。
        let current = arr[i];
        // 遍历前面的每一项，直到有比当前值小的，说明可以插入当前值的下一位。
        while(preIndex >= 0&&arr[preIndex]>current) {
            // 如果前面的大于当前值，则向后移动。
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        // 如果前面有大于current的，则将插入到这个值的后一位
        arr[preIndex + 1] = current;
    }
    return arr;
}

console.log('插入排序', insertSort([3, 1, 5, 7, 2, 4, 9, 6, 10, 8]));


function quickSort(arr) {
    if(arr.length <=1){
        return arr;
    }
    let midIndex = Math.floor(arr.length / 2);
    let midValue = arr.splice(minIndex, 1);
    let left = [];
    let right = [];
    for(let i = 0; i< arr.length; i++) {
        if(arr[i] < midValue) {
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(midValue, quickSort(right));
}

console.log('快速排序', insertSort([3, 1, 5, 7, 2, 4, 9, 6, 10, 8]));