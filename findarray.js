// https://www.codewars.com/kata/59a2a3ba5eb5d4e609000055/train/javascript

function findArray(arr1, arr2){
  const answer = []
  if(arr1.length == 0) return []
  arr2.forEach((el) => {
    if(el != undefined) answer.push(arr1[el])
  })
  return answer
}