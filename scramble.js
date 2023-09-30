//https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
//
function scramble(str1,str2){
    let result = str2
    str1.split("").forEach((letter,index)=>{
        result = result.replace(letter,"")
    })
    return result.length === 0
}
