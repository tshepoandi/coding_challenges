const nextBigger = n => {
    let nString = n.toString().split("")
    
    if (nString.length == 1) return -1
    if (nString.length == 2 ) {
        let reversed = parseInt(nString.reverse().join(""))
        return reversed > n ? reversed : -1
    }
    else{
        for(let i = 0;i < nString.length;i++){
            let newNumber = nString[nString.length - 1 - i]
            for(let i=-1; i < nString.length;i++ ){
                swapElements(nString,nString.length - i, newNumber)
                nString = nString.filter((element)=>{
                    if(element !== undefined) return element
                })
                console.log(parseInt(nString.join("")),n)
                if(parseInt(nString.join("")) > n ) return parseInt(nString.join(""))
            }
        }
        return -1
    }
}
// console.log(nextBigger(1))
// console.log(nextBigger(21))
// console.log(nextBigger(12))
console.log(nextBigger(151))
// console.log(nextBigger(513))
// console.log(nextBigger(21))
// tillTommorow

function swapElements(arr, i1, i2) {
  // Step 1
  let temp = arr[i1];

  // Step 2
  arr[i1] = arr[i2];

  // Step 3
  arr[i2] = temp;
}

const arr = [1, 2, 3, 4];

swapElements(arr, 2, 3);

// console.log(arr); // [ 4, 2, 3, 1 ]

// 12345
// 12354
// 12534
// 12