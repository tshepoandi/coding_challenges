// NOT YET COMPLETE

// https://www.codewars.com/kata/5463c8db865001c1710003b2/train/javascript

const numberToEnglish = n => {
  //your code here
    dictionary = {
        4:"thousand",
        3:"hundred",
        2:["ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"],
        1:["one","two","three","four","five","six","seven","eight","nine"]
    }

    let number = n.toString()
    return `${dictionary[1][parseInt(number[0]) -1]} ${dictionary[number.length]}`
}

console.log(numberToEnglish(540))