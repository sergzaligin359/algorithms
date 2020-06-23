const baseArr = [99, 0, 10, 11, 13, 5, 7, 6, 4, 2, 3, 17, 19, 21, 111];

const bubbleSort = baseArr => {

    for(let j = 0; j < baseArr.length; j++){

        for(let i = 0; i < baseArr.length - 1 - j; i++){
            if(baseArr[i] > baseArr[i + 1]){
                let t = baseArr[i];
                baseArr[i] = baseArr[i + 1];
                baseArr[i + 1] = t;
            }
        };

    }

    return baseArr;
};

console.log('bubbleSort', bubbleSort(baseArr));
