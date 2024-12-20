import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b;
}

export function addSkill(stud: StudentType, skill: string)  {
    stud.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true
}

export const toFireStaff = (Building: GovernmentBuildingType, staffCountToFire: number) => {
   Building.staffCount -= staffCountToFire
}

export const toHireStaff = (Building: GovernmentBuildingType, staffCountToFire: number) => {
    Building.staffCount += staffCountToFire
}

export function createMessage(props: CityType) {
    //return 'Hello ' + props.title + ' citizens. I want you be happy. All ' + props.citizenNumber + ' men'
    return `Hello ${props.title} citizens. I want you be happy. All ${props.citizenNumber} men`
}