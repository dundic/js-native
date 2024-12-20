import {sum, mult} from './00'

//data
let a : number;
let b : number;

beforeEach(() => {
    a = 10
    b = 18
})

test('sum function should be correct', () => {

    //action
    let result = sum(a, b);
    b = 2
    //expect result
    expect(result).toBe(28);
})

test('multiply function should be correct', () => {

    //action

    let result1 = mult(a, b);


    //expect result
    expect(result1).toBe(180);
})