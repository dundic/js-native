import {CityType} from "../02/02_02";
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: 'Elm street'}}
            },
            {
                buildedAt: 2008, repaired: false, address: {number: 100, street: {title: 'Happy street'}}
            },
            {
                buildedAt: 2020, repaired: false, address: {number: 200, street: {title: 'Hogwarts street'}}
            }
        ],
        governmentBuidings: [
            {type: 'HOSPITAL', budget: 200000, staffCount: 200,
                address: {number: 200, street: {title: 'Central Str'}}
            },
            {type: 'FIRE-STATION', budget: 500000, staffCount: 1000,
                address: {number: 200, street: {title: 'South Str'}}
            },

        ],
        citizenNumber: 10000000,
    }
})


//01. create a function in a single file for test to be completed
test('Budget should be changed for HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuidings[0], 100000)


    expect(city.governmentBuidings[0].budget).toBe(300000)

})

//01. tests should be completed
test('Budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.governmentBuidings[1], -100000)

    expect(city.governmentBuidings[1].budget).toBe(400000)
})

//02.add type HouseType (add ordinal id from 1 to increase)
//02.create another function in that file to tests be completed

test('Houses should be repaired', () => {
    repairHouse(city.houses[1])

    expect(city.houses[1].repaired).toBeTruthy()
})

test('staff calculation should be changed', () => {
    toFireStaff(city.governmentBuidings[0], 20)
    toFireStaff(city.governmentBuidings[1], 120)
    expect(city.governmentBuidings[0].staffCount).toBe(180)
    expect(city.governmentBuidings[1].staffCount).toBe(880)
})

test('staff calculation should be changed', () => {
    toHireStaff(city.governmentBuidings[0], 30)
    expect(city.governmentBuidings[0].staffCount).toBe(230)
})

test('Greeting message should be correct for city', () => {
    expect(createMessage(city)).toBe('Hello New York citizens. I want you be happy. All 10000000 men')
})