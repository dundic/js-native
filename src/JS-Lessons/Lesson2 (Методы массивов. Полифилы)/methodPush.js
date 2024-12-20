//пишем полифил для метода push
const arr = ['mark', 'tulliy']

function newPush(arr, ...param) {//оператор rest внутри функции, он собирает параметры в массив
    for (let i = 0; i < param.length; i++) {
        arr[arr.length] = param[i]
    }
    return arr
}//решение с помощью цикла

console.log(newPush(arr, 'garick', 'fedya', 'misha', 'sabina'))
console.log(arr)

