const bob = {  //original array  #123
    name: 'Bob',
    age: 32
    //..........128 properties
}

// const variable = {}
//
// variable.name = bob.name;
// variable.age = bob.age

const variable = {}

// for (const key in bob) {
//     variable[key] = bob[key]
// }

const newObj = {...bob, age: 45,}

console.log(newObj)

const names = ['Alex', 'Bob', 'Donald']

const copyNames = ['Egor', ...names]
console.log(copyNames)


//difficult part

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
const fullCopyOfUsers = structuredClone(users)

console.log('cравнение свойств объекта исходника и поверхностно скопированного. Вложенные объекты равны', surfaceCopyOfUsers[0] === users[0])
console.log('cравнение свойств объекта исходника и глубоко скопированного. Вложенные объекты уже не равны друг другу', fullCopyOfUsers[0]=== users[0])
console.log('cравнение свойств объекта исходника и поверхностно скопированного. Свойства вложенных объектов равны', surfaceCopyOfUsers[0].name === users[0].name)
console.log('cравнение свойств объекта исходника и глубоко скопированного. Свойства вложенных объектов равны', fullCopyOfUsers[0].name === users[0].name)

console.log('значение', fullCopyOfUsers[3])


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
// id === 2

const newData2 = newData.filter(o => o.id !== 2)
console.log(newData2)

//Update
// id: 4 => isStudent: false

const newData3 = newData2.map(u => u.id === 4 ? {...u, isStudent: false}: u )
console.log(newData3)