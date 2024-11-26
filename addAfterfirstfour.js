function sumAfterFirstFour(n) {
  const firstFour = []
  for (let i = 0; i <= 4; i++) {
    firstFour.push(i)
  }
  let result = firstFour.reduce((a, b) => a + b)
  let difference = n - 4
  for (let i = 0; i <= difference; i++) {
    result = result + i
  }
  return n > 4 ? result : n
}

console.log(sumAfterFirstFour(5))
