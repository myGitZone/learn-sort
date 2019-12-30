// 选择排序是一种简单直观的排序算法，无论什么数据进去都是 O(n²) 的时间复杂度。所以用到它的时候，数据规模越小越好。唯一的好处可能就是不占用额外的内存空间了吧。




// 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置

// 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。

// 重复第二步，直到所有元素均排序完毕。

function selectSort(arr) {
    const newArr = [];
    const len = arr.length;
    let minIndex = 0;
    let temp = 0;
    for (let i = 0; i < len; i++) {
        minIndex = i;
        temp = arr[i];
        for (let j = i + 1; j < len; j++) {
            if(arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

console.log(selectSort([3, 1, 5, 7, 2, 4, 9, 6, 10, 8]));