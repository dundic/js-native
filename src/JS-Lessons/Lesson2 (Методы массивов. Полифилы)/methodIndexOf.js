//пишем полифил для метода IndexOf
const arr = ['mark', 'tulliy','garick', 'fedya', 'misha', 'fedya', 'sabina']


const info = newIndexOf(arr, 'fedya', 2)

function newIndexOf(arr, el, startIndex = 0) {
    for (let i = startIndex; i < arr.length; i++) {
        if(el === arr[i]) {
            return i;
        }
    }
    return -1
}



function fullIndexOf(arr, el) {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        if(el === arr[i]) {
            res.push(i)
        }
    }
    return res
}

console.log(fullIndexOf(arr,'fedya'))

const c = [1,2,3]
const z = [4,5,6]
const w = [...c, ...z, 7]
console.log(w)//...spread вместо concat