const arrT = [2, 3, 10, 1, 10, 0, 22, 15, 55, 99];

const selectionSort = arr => {
    let sArr = [];
    while (arr.length) {
        sArr.push(Math.max.apply(null, arr));
        arr = arr.filter(el => el < Math.max.apply(null, arr));
    }
    return sArr;
};

console.log('selected sort', selectionSort(arrT))