import { sum } from './sum';

describe("sum()", () => {
    test("1 plus 1 should have a sum of 2", () => {
        expect(sum(1, 1)).toBe(2);
    })

    test("-1 plus -1 should have a sum of -2", () => {
        expect(sum(-1, -1)).toBe(-2);
    })
})