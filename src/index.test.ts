import { sum } from './index';

describe("sum", () => {
    test("1 plus 1 should be 2", () => {
        expect(sum(1,1)).toBe(2);
    })

    test("1 plus 1 should not be 3", () => {
        expect(sum(1,1)).not.toBe(3);
    })
})