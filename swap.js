const baseArr = [1, 2];

const swap = baseArr => {

    for(let i = 0; i < baseArr.length; i++) {
        if(baseArr[i] < baseArr[i + 1]){
            let mid = baseArr[i];
            baseArr[i] = baseArr[i + 1];
            baseArr[i + 1] = mid;
        }
    }

    return baseArr;
};

console.log('Swap', swap(baseArr));
