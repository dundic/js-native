//пишем полифил для метода unShift
const arr = ['football', 'basketball', 'ice-hockey', 'volleyball']//snooker, soccer

// function newUnShift(arr,...params) {
//     for (let i = arr.length-1; i >= 0; i--) {
//         arr[i + params.length] = arr[i]
//     }
//     for (let j = 0; j < params.length; j++) {
//         arr[j] = params[j]
//     }
//     return arr.length
// }
//код с двумя циклами

// function  newUnShift(arr, ...params) {
//     const res = [...params, ...arr]
//     arr = res
//     return arr.length
// }
// //странная неработающая фигня

function newUnShift(arr,...params) {
    for (let i = arr.length-1; i >= 0; i--) {
        arr[i + params.length] = arr[i]
        if(i < params.length) {
            arr[i] = params[i]
        }
    }
    return arr.length
}






newUnShift(arr, 'snooker', 'soccer', 'waterpolo' )

console.log('вызов функции ', newUnShift(arr))
console.log('первый элемент', (arr))

