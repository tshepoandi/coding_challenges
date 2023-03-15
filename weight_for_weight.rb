# another tough cookie ...need to refactor this too:
# https://www.codewars.com/kata/55c6126177c9441a570000cc/train/ruby
def order_weight(strng)
    stringSorted = strng.split(" ").map{ |number|
      splitNum = number.split("").map(&:to_i).reduce(0,:+)
      [splitNum,number]
    }.sort {|a,b| a[0] <=> b[0]}
  numberObject = {}
  answer = ""
  if stringSorted.empty?
    return ""
  else
    stringSorted.each { |array|
      numberObject[array[0]] = numberObject[array[0]].to_s + array[1] + " "
    }
    numberObject.each do |key,value|
      valueSplit = value.split(" ").sort.each do |splitvalue|
        answer = answer + splitvalue.to_s + " "
      end
    end
    return answer.strip
  end
end


# always someone out there with a solution thats one line:
def order_weight(string)
  string.split.sort_by { |n| [n.chars.map(&:to_i).reduce(:+), n] }.join(" ")
end
