const superUser = {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
        street: 'Kattie Turnpike',
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
        geo: {
            lat: '-38.2386',
            lng: '57.2232',
        },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
        name: 'Hoeger LLC',
        catchPhrase: 'Centralized empowering task-force',
        bs: 'target end-to-end models',
    },
}

const newSuperUser2 = {
    ...superUser,
    address: {
        ...superUser.address, //первый уровень вложенности
        street: 'Kattie',
        geo: { ...superUser.address.geo, lng: '60', lat: '60' }, //копируем второй уровень вложенности
    },
}
newSuperUser2.address.city = 'London'

console.log('newSuperUser', newSuperUser2.address.city) //London
console.log('superUser', superUser.address.city) //Lebsackbury



