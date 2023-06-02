def is_sqare(x)
    for i in 0..x do
        if i * i == x
            return true
        end
    end
    return false
end

puts is_sqare(0)