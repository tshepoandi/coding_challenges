// https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript

const nextBigger = n => {
    let nString = n.toString().split("").reverse()
    for(let i = 0;i < nString.length -1;i++){
        if(parseInt(nString[i]) > parseInt(nString[i+1])){
            swapElements(nString,i+1,i)
            return parseInt(nString.reverse().join(""))
        }
    }
    return -1
}


function swapElements(arr, i1, i2) {
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}

const arr = [10, 20, 30, 40];

swapElements(arr, 2, 3);

console.log(nextBigger(1))
console.log(nextBigger(21))
console.log(nextBigger(12))
console.log(nextBigger(115))
console.log(nextBigger(513))
console.log(nextBigger(2017))


