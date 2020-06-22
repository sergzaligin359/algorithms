// l-8
const baseArr = [ 115, 22, 5, 113, 33, 2, 11, 13, 1, 0, 111 ];
const findItem = 0;

const findMax = arr => {
    let maxIndex = 0;
    for(let i = 0; i < arr.length; i++ ){
        if(arr[maxIndex] < arr[i]){
            maxIndex = i
        }
    }
    return arr[maxIndex];
};

console.log('findMax', findMax(baseArr));

const getSortArr = arr => {

    const sortArr = [];

    while(arr.length){
        let max = Math.max.apply(null, arr);
        sortArr.push(max);
        arr = arr.filter(el => el < max);
    }

    return sortArr.reverse();
};

// [ 0, 1, 2, 5, 11, 13, 22, 33 ]
const binarySearch = (arr, item) => {
    let low = 0;
    let hight = arr.length - 1;
    let mid = undefined;

    while(true){
        mid = Math.floor((low + hight) / 2);
        if(item > arr[mid]){
            low = mid + 1;
        }else if(item < arr[mid]){
            hight = mid - 1;
        }else {
            return mid + 1;
        }
    }

};

const sortArr = getSortArr(baseArr);
console.log('sortArr', sortArr);

const result = binarySearch(sortArr, findItem);
console.log('binarySearch', result);
