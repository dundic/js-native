//пишем полифил для метода Reverse
const arr = ['football', 'basketball', 'ice-hockey', 'volleyball']

// function newReverse(arr) {
//     const copy = [...arr]
//     console.log(copy)
//
//     for (let i = copy.length - 1; i >= 0; i--) {
//
//         arr[copy.length - 1 - i ] = copy[i]//решение задачки со spread оператором
//
//     }
//     return arr
// }


function newReverse(arr) {

    for (let i = 0; i < arr.length / 2; i++) {

        const temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]//хитрый код. решение без кории массива
        arr[arr.length -1 - i] = temp

    }
    return arr
}


console.log('вызов функции ', newReverse(arr))


