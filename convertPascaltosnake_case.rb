# https://www.codewars.com/kata/529b418d533b76924600085d/train/ruby

def to_underscore(string)
  string = string.to_s
  if string.length == 1
    return string
  end
  s = string.split(/(?=[A-Z\W][a-z])/)
  return s.map { |word|
  word = word[0].downcase + word[1..word.length-1]
  }.join("_")
end

puts to_underscore("TestController")
puts to_underscore("MoviesAndBooks")
puts to_underscore("App7Test")
puts to_underscore(1)
