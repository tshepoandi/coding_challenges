// NOT YET COMPLETE

// https://www.codewars.com/kata/5463c8db865001c1710003b2/train/javascript

const numberToEnglish = n => {
    dictionary = {
        singles:["one","two","three","four","five","six","seven","eight","nine"],
        lessThanTwenty:["eleven","twelve","thirteen","forteen","fifteen","sixteen","seventeen","eighteen","nineteen"],
        2:["ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"],      
        3:"hundred",
        4:"thousand",
    }
    let number = n.toString().split("")
    let numberLength = number.length
    const numArr = []
    for (let i = 0;i < number.length;i++){
        numberLength -= 1
        numArr.push(number[i] + "0".repeat(numberLength))
        // if numArr.push(dictionary)
    }
    // let ans;
  
    // return ans
}

console.log(numberToEnglish(540))
console.log(numberToEnglish(23))