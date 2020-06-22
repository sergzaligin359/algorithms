// arr length 16
const arr = [7, 8, 9, 10, 11, 12, 13, 14,  15, 16, 17, 18,  19, 20,  21, 22]

const binary_search = (arr, item) => {

  let hight = arr.length - 1
  let low = 0
  let mid

  while(true){

    mid = Math.floor((low + hight) / 2)

    if(item > arr[mid]){
      low = mid + 1
    }else if(item < arr[mid]){
      hight = mid - 1
    }else{
      return mid + 1
    }
  }

}
console.time("binary search")
console.log('result', binary_search(arr, 22))
console.timeEnd("binary search")
