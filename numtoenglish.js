// // NOT YET COMPLETE

// // https://www.codewars.com/kata/5463c8db865001c1710003b2/train/javascript

// const numberToEnglish = n => {
//     dictionary = {
//         singles:["zero","one","two","three","four","five","six","seven","eight","nine"],
//         lessThanTwenty:["eleven","twelve","thirteen","forteen","fifteen","sixteen","seventeen","eighteen","nineteen"],
//         tens:["ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], 
//         0:"zero",
//         1:"one",
//         2:"two",     
//         3:"hundred",
//         4:"thousand",
//     }
//     let number = n.toString().split("")
//     let numberLength = number.length
//     const numArr = []
//     let answer = []
//     for (let i = 0;i < number.length;i++){
//         numberLength -= 1
//         numArr.push(number[i] + "0".repeat(numberLength))
//         let fill;
//         if (numArr[i].length == 1) {
//             fill = dictionary.singles[parseInt(numArr[i][0])] !== "zero" ? dictionary.singles[parseInt(numArr[i][0])] : "";
//             answer.push(fill)
//             break
//         }
//         if (numArr[i].length == 2){
//             fill = dictionary.tens[parseInt(numArr[i][0]) -1]
//             answer.push(fill)
//             continue
//         }
//         if(numArr[i].length >= 3)  fill = dictionary[numArr[i].length]

//         answer.push(dictionary.singles[[parseInt(numArr[i][0])]] + "" + fill)
//     }
//     // let ans;
  
//     return answer.join(" ")
// }

// console.log(numberToEnglish(1541))
// console.log(numberToEnglish(23))


// // Soulution2

// //  do 000 000 000 000 

const numberToEnglish = n => {
    dictionary = {
        singles:["zero","one","two","three","four","five","six","seven","eight","nine"],
        lessThanTwenty:["eleven","twelve","thirteen","forteen","fifteen","sixteen","seventeen","eighteen","nineteen"],
        tens:["ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], 
        0:"zero",
        1:"one",
        2:"two",     
        3:["","hundred"],
        4:["","thousand"],
        5:["","million"]
    }

    let number = n.toString()
    // if(number.length <= 3 ) return dictionary[3]
    // if(number.length >= 4 && number.length <= 6) return dictionary[4]
    // if(number.length > 6) return dictionary[5] 
    // return answer
    
}
console.log(numberToEnglish(50))
console.log(numberToEnglish(500))
console.log(numberToEnglish(5000))
console.log(numberToEnglish(50000))