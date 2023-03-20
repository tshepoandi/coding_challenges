# https://www.codewars.com/kata/517abf86da9663f1d2000003/train/ruby

def to_camel_case(str)
  answer = ""
  if str.empty?
    return ""
  else
    answer = str.split(/[-_]/).map { |word|
    word[0].upcase + word[1..word.length]
    }.join("")
    return str[0] == str[0].downcase ? answer[0].downcase + answer[1..answer.length] :
    answer
#     [0].downcase + answer[1..answer.length]
  end

end
