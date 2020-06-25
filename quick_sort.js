const baseArr = [99, 0, 10, 11, 13, 13, 13, 13, 5, 7, 6, 4, 2, 2, 3, 17, 19, 21, 111];

const quickSort = baseArr => {

    if(baseArr.length < 2) return baseArr;

    const pivot = baseArr[Math.floor( Math.random() * baseArr.length)];

    const more = baseArr.filter(el => el > pivot);
    const less = baseArr.filter(el => el < pivot);
    const eq = baseArr.filter(el => el === pivot);

    return [...quickSort(less), ...eq, ...quickSort(more)];

};

console.log('quickSort', quickSort(baseArr));