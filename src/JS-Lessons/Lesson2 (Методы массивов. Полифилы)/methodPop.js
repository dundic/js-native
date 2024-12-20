//пишем полифил для метода pop
const arr = ['mark', 'tulliy', 'ciceron', 'brut', 'cesar']
console.log(arr.length)

// function newPop (arr) {
//     if(!arr.length){
//         return undefined
//     }
//     const deleted = arr[arr.length - 1]
//     arr.length = arr.length - 1
//     return deleted
// }

function newPop(){
    if(arr.length){
        const deleted = arr[arr.length - 1]
        arr.length = arr.length - 1
        return deleted
    }
    return undefined
}//более удобный для чтения код

console.log(newPop(arr))
console.log(arr)
