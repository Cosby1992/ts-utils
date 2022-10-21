import { mergeSort } from './merge-sort';

describe("mergesort", () => {

    test('sorts array of numbers', () => {
        const unsorted: number[] = [1,9,2,8,3,7,4,6,5];
        const expected: number[] = [1,2,3,4,5,6,7,8,9];
        const sorted = mergeSort(unsorted);

        expect(sorted).toEqual(expected);
    })

    test('sorts array of negative numbers', () => {
        const unsorted: number[] = [-1,-9,-2,-8,-3,-7,-4,-6,-5];
        const expected: number[] = [-9,-8,-7,-6,-5,-4,-3,-2,-1];
        const sorted = mergeSort(unsorted);

        expect(sorted).toEqual(expected);
    })

    test('sorts array of negative and positive numbers', () => {
        const unsorted: number[] = [1,9,2,8,-3,-7,-4,-6,-5];
        const expected: number[] = [-7,-6,-5,-4,-3,1,2,8,9];
        const sorted = mergeSort(unsorted);

        expect(sorted).toEqual(expected);
    })

    test('sorts array of strings', () => {
        const unsorted: string[] = ['zebra', 'yvonne', 'xylophone', 'cycle', 'bass', 'alphabet'];
        const expected: string[] = ['alphabet', 'bass', 'cycle', 'xylophone', 'yvonne', 'zebra'];
        const sorted = mergeSort(unsorted);

        expect(sorted).toEqual(expected);
    })

    test('sorts array with length one', () => {
        const unsorted: string[] = ['zebra'];
        const expected: string[] = ['zebra'];
        const sorted = mergeSort(unsorted);

        expect(sorted).toEqual(expected);
    })

    test('sorts array with length two', () => {
        const unsorted: string[] = ['zebra', 'alpha'];
        const expected: string[] = ['alpha', 'zebra'];
        const sorted = mergeSort(unsorted);

        expect(sorted).toEqual(expected);
    })

    test('sorts array with length three', () => {
        const unsorted: string[] = ['zebra', 'alpha', 'bravo'];
        const expected: string[] = ['alpha', 'bravo', 'zebra'];
        const sorted = mergeSort(unsorted);

        expect(sorted).toEqual(expected);
    })

    test('sorts empty array', () => {
        const unsorted: string[] = [];
        const expected: string[] = [];
        const sorted = mergeSort(unsorted);

        expect(sorted).toEqual(expected);
    })

    test('sorts array of objects given a comparator', () => {

        interface ObjectWithProperty {
            property: number
        }

        const comparator = (item: ObjectWithProperty, other: ObjectWithProperty) => {
            if(item.property > other.property) return 1;
            if(item.property < other.property) return -1;
            return 0;
        }

        const unsorted: {property: number}[] = [{property: 4}, {property: 3}, {property: 1}, {property: 2}];
        const expected: {property: number}[] = [{property: 1}, {property: 2}, {property: 3}, {property: 4}];
        const sorted = mergeSort(unsorted, comparator);

        expect(sorted).toEqual(expected);
    })


})