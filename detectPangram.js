// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(string){
    let alphabets = "abcdefghijklmnopqrstuvwxyz".split("")
    string.split("").forEach((letter)=>{
        letter = letter.toLowerCase()
        ind = alphabets.indexOf(letter)
        if (ind !== -1){

            alphabets.splice(ind,1)
        }
    })
    console.log(alphabets)
    if (alphabets.length == 0){
        return true
    }
    return false
}

// console.log(isPangram("The quick brown fox jumps over the lazy dog"))
// console.log(isPangram("Cwm fjord bank glyphs vext quiz"))
// console.log(isPangram("Pack my box with five dozen liquor jugs."))
console.log(isPangram("How quickly daft jumping zebras vex"))
// const array = [2, 5, 9];

// console.log(array);

// const index = array.indexOf(5);
// if (index > -1) { // only splice array when item is found
//   array.splice(index, 1); // 2nd parameter means remove one item only
// }

// // array = [2, 9]
// console.log(array); 