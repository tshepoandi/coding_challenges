def rot13(message)
  print "Z".bytes
 answ = message.split("").map { |letter|
 if letter =~ /[a-zA-Z]/
   ori = letter
   letter = letter.bytes[0] + 13
   if ori == ori.downcase && letter > 122
     letter = letter - 26
   else
     if ori == ori.upcase && letter > 90
     letter = letter - 26
     end
   end
   letter = [letter].pack('c*')
  else
   letter = letter
  end
 }.join
  puts answ
  return answ

end
