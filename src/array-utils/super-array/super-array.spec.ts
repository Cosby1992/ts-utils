import SuperArray from './super-array';

describe("SuperArray", () => {

    it("should inherit push method from array class", () => {

        const expected = "Hello";

        const sArray = new SuperArray<string>();

        sArray.push(expected);

        expect(sArray.at(0)).toBe(expected);

    })

})