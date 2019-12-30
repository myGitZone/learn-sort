// 冒泡排序
// 比较相邻的元素。如果第一个比第二个大，就交换他们两个。

// 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。

// 针对所有的元素重复以上的步骤，除了最后一个。

// 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。


// 时间复杂度 O(n²)
function bubbleSort(arr) {
    // 如果是长度为0或者1，返回数组。不需要排序
    if (arr.length === 0 || arr.length === 1) {
        return arr;
    }
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (j = 0; j < len - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                const temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([3, 1, 5, 7, 2, 4, 9, 6, 10, 8]));