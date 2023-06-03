# https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/ruby

def sumArray(arr)
    arr = arr.sort
    arr = arr.drop(1)
    arr = arr.take arr.length - 1
    return arr.reduce(:+)
end

puts sumArray([6, 2, 1, 8, 10])