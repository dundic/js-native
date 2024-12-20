type TechnologyType = {
    id: number
    title: string
}

type LocalCityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologyType>
}

export const student: StudentType = {
    id: 1,
    name: 'Alex',
    age: 43,
    isActive: true,
    address: {
        streetTitle: 'Baykalskaya',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'React'
        }    ]
}

console.log(student.age)
console.log(student.name)
console.log(student.isActive)
console.log(student.address.city.title)
console.log(student.technologies[2].title)

