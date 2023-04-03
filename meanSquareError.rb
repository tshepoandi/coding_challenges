def solution(arr1, arr2)
  answer = []

  for a in 1..arr1.length
    num1 = arr1[a - 1] * 1
    num2 = arr2[a - 1] * 1
    intoArray = num1 >= num2 ? num1 - num2 : num2 - num1
    answer << intoArray * intoArray
  end
  return answer.reduce(:+).to_f / answer.length
end
