const a = 440444
function separator(number) {
    const string = String(number)
    let result = ''
    if (string.length === 4) {
        result += string.split('')[0]
        result += " "
        for (let i = 1; i < string.split('').length; i++) {
            result += string.split('')[i]
        }


        return result
    }
    if (string.length === 5) {
        result += string.split('')[0]
        result += string.split('')[1]
        result += " "
        for (let i = 2; i < string.split('').length; i++) {
            result += string.split('')[i]
        }


        return result
    }
    if (string.length === 6) {
        result += string.split('')[0]
        result += string.split('')[1]
        result += string.split('')[2]
        result += " "
        for (let i = 3; i < string.split('').length; i++) {
            result += string.split('')[i]
        }


        return result
    }


}
console.log(separator(a)); 