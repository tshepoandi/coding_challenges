# https://www.codewars.com/kata/515f51d438015969f7000013/train/ruby


def pyramid(number)
 answer = []
 if number < 1
   return []
 else
   number.times do |i|
     iteration = i + 1
     array = "1" * iteration
     array = array.split("").map { |num| num.to_i}
     answer.push(array)
   end
 end
  return answer
end


pyramid(8)


#    make a loop
#    for every iteration repeat character and split it
#    map every split to interger
#    boom
