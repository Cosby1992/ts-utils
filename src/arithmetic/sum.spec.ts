import { sum } from './sum';

/**
 * Testing of the sum function
 * write your tests how you like them, this is just a simple example
 */
describe("sum()", () => {
    test("1 plus 1 should have a sum of 2", () => {
        expect(sum(1, 1)).toBe(2);
    })

    test("-1 plus -1 should have a sum of -2", () => {
        expect(sum(-1, -1)).toBe(-2);
    })
})