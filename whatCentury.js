// https://www.codewars.com/kata/52fb87703c1351ebd200081f/solutions/javascript


function whatCentury(year) {
    firstThreeNumbers = {
        1: "st",
        2: "nd",
        3: "rd"
    }

    century = Math.ceil(year / 100)
    result = century.toString().split("")
    keys = Object.keys(firstThreeNumbers)

    if (result[result.length - 2] > 1) {
        return keys.includes(result[result.length - 1]) ? `${result.join("")}${firstThreeNumbers[result[result.length-1]]}` : `${result.join("")}th`
    }
    return `${result.join("")}th`

}

console.log(whatCentury("1234")),
    console.log(whatCentury("2011")),
    console.log(whatCentury("2154")),
    console.log(whatCentury("2259")),
    console.log(whatCentury("1234")),
    console.log(whatCentury("1023")),
    console.log(whatCentury("2000"))