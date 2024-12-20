//пишем полифил для метода Shift
const arr = ['mark', 'tulliy', 'ciceron', 'brut', 'cesar']
console.log('длина массива', arr.length)

function newShift() {
    if (!arr.length) {
        return undefined
    }
    let deletedElem = arr[0]
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i]//смещение индекса
    }
    arr.length = arr.length - 1
    return deletedElem
}

console.log('вызов функции ', newShift(arr))
console.log('первый элемент', (arr[0]))
console.log('длина массива', arr.length)

