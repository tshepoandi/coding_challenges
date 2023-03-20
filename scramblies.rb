# https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/ruby

def scramble(s1, s2)
  s1_chars = s1.chars
  s2_chars = s2.chars

  s1_chars.each do |char|
    if s2_chars.include?(char)
      s2_chars.delete_at(s2_chars.index(char))
    end
  end

  s2_chars.empty?
end
