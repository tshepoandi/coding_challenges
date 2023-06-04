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
            console.log(nString,newNumber)
        }
        // return nString[nString.length -1]
    }
}
console.log(nextBigger(1))
console.log(nextBigger(21))
console.log(nextBigger(12))
console.log(nextBigger(531))
console.log(nextBigger(513))
// console.log(nextBigger(21))
// tillTommorow