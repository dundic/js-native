//null - это ссылка на несуществующий объект

console.log( typeof typeof null) //object (определенное отсутствие)
console.log(typeof undefined) // 'undefined' (отсутствие определенности)
console.log(typeof 123) //number
console.log(typeof NaN) //number
console.log(NaN === NaN) //false

console.log(10 * null) // 0
console.log(10 * '0') // 0
console.log(10 + '0') // 100 выполняется конкатенация. число 10 превращается в строку и складывается с "0"
console.log(typeof Infinity) // number
console.log(isNaN(NaN)) // не число NaN
console.log(isFinite(Infinity)) //проверка на число


//Symbol
//BigInt




//array
//object

//1. 'составной' тип данных
//2. имеют свойства и методы
//3. ссылочный тип данных


const Bob = {
    name: 'Bob',
    age: 35
}

const copyBob = {
    name: Bob.name,
    age: Bob.age,
    name: 'Alex'
}




const users = [
    {
        id: 1,
        name: 'Joanna',
        isStudent: false,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'Bob',
        isStudent: true,
    }

]

const couples = structuredClone(users)

const couple = couples.filter(x => x.name !== 'Bob' )

const coupleAlexJoannaareStudents = couple.map(x => x.isStudent === false ? {...x, isStudent: true} : x)







console.log(another === date)


