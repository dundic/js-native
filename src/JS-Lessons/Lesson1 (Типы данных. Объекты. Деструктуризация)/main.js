// данные =>  делаем копию => вносим изменения в копию => используем копию с изменениями

// как сделать копию массива или объекта

// ссылочный тип данных -> ???

//  array, object, function


const bob = {  //original array  #123
    name: 'Bob',
    age: 32
    //..........128 properties
}

const variable = {} // second array  #124

for (const key in bob) {
    variable[key] = bob[key] //create new object 1
}

const newObj = {...bob, age: 45} // create new object 2


const names = ['Alex', 'Bob', 'Donald']

const copyNames = [ 'Egor', ...names]

console.log(newObj)


const users = [
    {
        id: 1,
        name: 'Bob',
        isStudent: true,
    },
    {
        id: 2,
        name: 'Alex',
        isStudent: true,
    },
    {
        id: 3,
        name: 'Ann',
        isStudent: true,
    },
    {
        id: 4,
        name: 'Donald',
        isStudent: true,
    },
]

const surfaceCopyOfUsers = [...users]

console.log(surfaceCopyOfUsers)
console.log(users[0] === surfaceCopyOfUsers[0])

const fullCopyOfUsers = structuredClone(users)


//CRUD

//Create
const newUser = {
    id: 5,
    name: 'Helga',
    isStudent: true,
}

const newData = [...users, newUser]

console.log(newData)

//Delete

//id === 2

// const newData2 = []
// for(let i = 0; i < users.length; i++) {
//     if(users[i].id !== 2) {
//         newData2.push(users[i])
//     }
// }
//
// console.log(newData2)

const newData2 = newData.filter(o => o.id !== '2')
console.log(newData2)

//Update
//id: 4 => isStudent: false

const newData3 = users.map(u => u.id === 4 ? {...u, isStudent: false}: u )

console.log(newData3)