const nextSmaller = n => {
    stringNum = n.toString().split("")
    if(stringNum.length <= 1) return -1
    if(stringNum.length == 2) return parseInt(stringNum.reverse().join("")) < n ? parseInt(stringNum.join("")) : -1
    else{
        
        // console.log(swapElements(stringNum,))       
    }
}

function swapElements(arr, i1, i2) {
  let temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}

console.log(nextSmaller(21))
nextSmaller(907)
nextSmaller(531)
nextSmaller(135)
nextSmaller(2071)