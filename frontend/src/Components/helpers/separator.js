export function separator(number) {
    const string = String(number)
    let result = ''
    let array = string.split('')
    if (string.length === 4) {
        result += array[0]
        result += " "
        for (let i = 1; i < array.length; i++) {
            result += array[i]
        }
        return result
    }
    if (string.length === 5) {
        result += array[0]
        result += array[1]
        result += " "
        for (let i = 2; i < array.length; i++) {
            result += array[i]
        }
        return result
    }
    if (string.length === 6) {
        result += array[0]
        result += array[1]
        result += array[2]
        result += " "
        for (let i = 3; i < array.length; i++) {
            result += array[i]
        }
        return result
    }
    return number

}
