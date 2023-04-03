# https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/ruby

def pig_it(text)
  return(
    text
      .split(" ")
      .map do |i|
        if i[i.length - 1] =~ /\w/
          i[1..i.length] + i[0] + "ay"
        else
          if i[0] =~ /w/
            wordLength = i.length - 2
            i[1..wordLength] + i[0] + "ay"
          else
            i
          end
        end
      end
      .join(" ")
  )
end

puts pig_it("hELLO EARTH!")
puts pig_it("this is pig latin")
